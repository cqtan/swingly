import { UserActionTypes } from './user.types';
import { 
  createUserProfileDocument, 
  getCurrentUser,
  signInWithGithub,
  signInWithGoogle,
} from '../../firebase/firebase.utils';
import { auth, firestore } from '../../firebase/firebase.utils';

const getUserWithProvider = async (signInMethod) => {
  switch(signInMethod) {
    case 'google':
      return await signInWithGoogle();
    case 'github':
      return await signInWithGithub();
    default:
      console.log('Invalid provider!');
      return;
  }
}

export const setCurrentUser = () => async dispatch => {
  try {
    dispatch({ type: UserActionTypes.USER_LOADING });

    const userAuth = await getCurrentUser();
    if (!userAuth) return;    

    const userRef = await createUserProfileDocument(userAuth);
    const userSnapshot = await userRef.get();

    dispatch({
      type: UserActionTypes.SET_CURRENT_USER_SUCCESS,
      payload: userSnapshot.data()
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.SET_CURRENT_USER_FAILED,
      payload: error
    });
  }
}

export const signInWithProvider = (signInMethod) => async dispatch => {
  try {
    dispatch({ type: UserActionTypes.USER_LOADING });

    const { user } = await getUserWithProvider(signInMethod);
    const userRef = await createUserProfileDocument(user);
    const userSnapshot = await userRef.get();

    dispatch({
      type: UserActionTypes.SIGNIN_SUCCESS,
      payload: userSnapshot.data()
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.SIGNIN_FAILED,
      payload: error
    });
  }
}

export const signOut = () => async dispatch => {
  try {
    await auth.signOut();
    dispatch({type: UserActionTypes.SIGNOUT_SUCCESS});
  } catch (error) {
    dispatch({
      type: UserActionTypes.SIGNOUT_FAILED,
      payload: error
    });
  }
}

export const signUp = values => async dispatch => {
  // Check if user exists already
  const usersSnap = await firestore.collection('users').get();
  let userExists = null;
  if (usersSnap) {
    usersSnap.forEach(doc => {
      if (doc.data().email === values.email)
        userExists = doc.data();
    });
  }

  if (!userExists) {
    const { user } = await auth.createUserWithEmailAndPassword(
      values.email,
      values.password
    );

    const newUserDocRef = firestore.collection('users').doc();
    try {
      const { username, email, password } = values;
      const createdAt = new Date();
      await newUserDocRef.set({
        createdAt,
        displayName: username,
        email,
        password
      });

      dispatch({
        type: UserActionTypes.SIGNUP_SUCCESS,
        payload: user
      });
    } catch {
      dispatch({ 
        type: UserActionTypes.SIGNUP_FAILED,
        payload: 'User with given email already exists!'
      });
    }
  } else {
    dispatch({ 
      type: UserActionTypes.SIGNUP_FAILED,
      payload: 'User with given email already exists!'
    });
  }
}