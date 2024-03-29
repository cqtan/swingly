import { UserActionTypes } from "./user.types";
import {
  createUserProfileDocument,
  getCurrentUser,
  signInWithGithub,
  signInWithGoogle
} from "./user.utils";
import {
  auth,
  firestore,
  getEnvironment,
  getCredentials,
  deleteFieldValue
} from "../../firebase/firebase.utils";
import { openSnackbar } from "../snackbar/snackbar.actions";
import { fetchUsers } from "./user.utils";

const getUserWithProvider = async signInMethod => {
  switch (signInMethod) {
    case "google":
      return await signInWithGoogle();
    case "github":
      return await signInWithGithub();
    default:
      return () => {
        throw Error("Invalid provider!");
      };
  }
};

export const setCurrentUser = () => async dispatch => {
  try {
    dispatch({ type: UserActionTypes.USER_LOADING });

    const userAuth = await getCurrentUser();
    if (!userAuth) {
      dispatch({ type: UserActionTypes.USER_NOT_LOADING });
      return;
    }

    const userRef = await createUserProfileDocument(userAuth);
    const userSnapshot = await userRef.get();

    dispatch({
      type: UserActionTypes.SET_CURRENT_USER_SUCCESS,
      payload: userSnapshot.data().id
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.SET_CURRENT_USER_FAILED,
      payload: error
    });
  }
};

export const setUsers = () => async dispatch => {
  try {
    dispatch({ type: UserActionTypes.USER_LOADING });

    const usersObj = await fetchUsers();

    if (Object.keys(usersObj).length) {
      dispatch({
        type: UserActionTypes.SET_USERS_SUCCESS,
        payload: usersObj
      });
    } else {
      dispatch({
        type: UserActionTypes.SET_USERS_FAILED,
        payload: "No users in DB!"
      });
    }
  } catch (error) {
    dispatch({
      type: UserActionTypes.SET_USERS_FAILED,
      payload: error
    });
    dispatch(openSnackbar("error", "Fetch Users failed!"));
  }
};

export const signInWithProvider = signInMethod => async dispatch => {
  try {
    dispatch({ type: UserActionTypes.USER_LOADING });

    const { user } = await getUserWithProvider(signInMethod);
    const userRef = await createUserProfileDocument(user);
    const userSnapshot = await userRef.get();

    dispatch({
      type: UserActionTypes.SIGNIN_SUCCESS,
      payload: userSnapshot.data().id
    });

    dispatch(openSnackbar("success", "You have been successfully signed in!"));
  } catch (error) {
    dispatch({
      type: UserActionTypes.SIGNIN_FAILED,
      payload: error
    });

    dispatch(openSnackbar("error", "Sign in failed!"));
  }
};

export const signOut = () => async dispatch => {
  try {
    await auth.signOut();
    dispatch({ type: UserActionTypes.SIGNOUT_SUCCESS });

    dispatch(openSnackbar("success", "You have been successfully signed out!"));
  } catch (error) {
    dispatch({
      type: UserActionTypes.SIGNOUT_FAILED,
      payload: error
    });

    dispatch(openSnackbar("error", "Sign out failed!"));
  }
};

export const signUp = values => async dispatch => {
  const usersSnap = await firestore
    .collection(`${getEnvironment()}/data/users`)
    .get();
  let userExists = null;
  if (usersSnap) {
    usersSnap.forEach(doc => {
      if (doc.data().email === values.email) {
        userExists = doc.data();
      }
    });
  }

  if (!userExists) {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );

      if (user) {
        const userAuth = await getCurrentUser();
        const userRef = await createUserProfileDocument(userAuth, {
          username: values.username
        });

        const userSnapshot = await userRef.get();
        dispatch({
          type: UserActionTypes.SIGNUP_SUCCESS,
          payload: {
            ...userSnapshot.data(),
            following: {}
          }
        });

        await auth.signOut();

        dispatch(openSnackbar("success", "Sign up success!"));
      }
    } catch (error) {
      dispatch({
        type: UserActionTypes.SIGNUP_FAILED,
        payload: error
      });

      dispatch(openSnackbar("error", "Sign up failed!"));
    }
  } else {
    dispatch({ type: UserActionTypes.SIGNUP_FAILED });
    dispatch(openSnackbar("error", "User with given email already exists!"));
  }
};

export const signInWithEmail = values => async dispatch => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(
      values.email,
      values.password
    );

    const userRef = await createUserProfileDocument(user);
    const userSnap = await userRef.get();

    dispatch({
      type: UserActionTypes.SIGNIN_SUCCESS,
      payload: userSnap.data().id
    });

    dispatch(openSnackbar("success", "You have been successfully signed in!"));
  } catch (error) {
    dispatch({
      type: UserActionTypes.SIGNIN_FAILED,
      payload: error
    });

    dispatch(
      openSnackbar("error", "Incorrect email or password! Please try again.")
    );
  }
};

export const editUser = (values, currentUser) => async dispatch => {
  let newValues = {};
  if (values.username !== currentUser.username) {
    newValues.username = values.username;
  }

  if (values.description !== currentUser.description) {
    newValues.description = values.description;
  }

  if (Object.keys(newValues).length !== 0) {
    const userRef = firestore.doc(
      `${getEnvironment()}/data/users/${currentUser.id}`
    );
    const userSnap = await userRef.get();

    if (userSnap.exists) {
      try {
        const batch = firestore.batch();
        Object.entries(newValues).forEach(([key, val]) => {
          batch.update(userRef, {
            [key]: val
          });
        });
        await batch.commit();

        dispatch({
          type: UserActionTypes.EDIT_SUCCESS,
          payload: newValues
        });

        dispatch(openSnackbar("success", "Edit successful!"));
      } catch (error) {
        dispatch({
          type: UserActionTypes.EDIT_FAILED,
          payload: error
        });
        dispatch(
          openSnackbar("error", "Edit failed! User snapshot does not exist!")
        );
      }
    }
  } else {
    dispatch(openSnackbar("error", "Edit failed!"));
  }
};

export const deleteUser = password => async dispatch => {
  const user = await auth.currentUser;

  if (user) {
    try {
      const credential = await getCredentials(auth.currentUser.email, password);
      await auth.currentUser.reauthenticateWithCredential(credential);
      await firestore
        .doc(`${getEnvironment()}/data/users/${user.uid}`)
        .delete();
      await auth.currentUser.delete();
      await auth.signOut();
      dispatch({ type: UserActionTypes.DELETE_SUCCESS });
      dispatch(openSnackbar("success", "Delete successful!"));
    } catch (error) {
      dispatch({
        type: UserActionTypes.DELETE_FAILED,
        payload: error
      });
      dispatch(
        openSnackbar("error", "Deletion failed! Please check your password")
      );
    }
  } else {
    dispatch({ type: UserActionTypes.DELETE_FAILED });
    dispatch(openSnackbar("error", "Deletion failed! User not signed in"));
  }
};

export const followUser = userId => async dispatch => {
  try {
    const currentUser = auth.currentUser.uid;
    const userRef = firestore.doc(
      `${getEnvironment()}/data/users/${currentUser}`
    );
    const userSnap = await userRef.get();

    if (userSnap.exists) {
      await userRef.update({
        [`following.${userId}`]: true
      });
    }

    dispatch({
      type: UserActionTypes.FOLLOW_SUCCESS,
      payload: userId
    });
  } catch (err) {
    dispatch({
      type: UserActionTypes.FOLLOW_FAILED,
      payload: err
    });
  }
};

export const unfollowUser = userId => async dispatch => {
  try {
    const currentUser = auth.currentUser.uid;
    const userRef = firestore.doc(
      `${getEnvironment()}/data/users/${currentUser}`
    );
    const userSnap = await userRef.get();

    if (userSnap.exists) {
      await userRef.update({
        [`following.${userId}`]: deleteFieldValue()
      });
    }

    dispatch({
      type: UserActionTypes.UNFOLLOW_SUCCESS,
      payload: userId
    });
  } catch (err) {
    dispatch({
      type: UserActionTypes.UNFOLLOW_FAILED,
      payload: err
    });
  }
};

export const toggleFollowedUser = userId => async dispatch => {
  try {
    dispatch({
      type: UserActionTypes.TOGGLE_FOLLOWED_USER_SUCCESS,
      payload: userId
    });
  } catch (err) {
    dispatch({
      type: UserActionTypes.TOGGLE_FOLLOWED_USER_FAILED,
      payload: err
    });
  }
};
