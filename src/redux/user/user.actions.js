import { UserActionTypes } from './user.types';
import { 
  createUserProfileDocument, 
  getCurrentUser,
  signInWithGithub,
  signInWithGoogle,
} from '../../firebase/firebase.utils';
import { auth, firestore } from '../../firebase/firebase.utils';
import { openSnackbar } from '../snackbar/snackbar.actions';

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
  const usersSnap = await firestore.collection('users').get();
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
          displayName: values.username 
        });
  
        const userSnapshot = await userRef.get();
        dispatch({
          type: UserActionTypes.SIGNUP_SUCCESS,
          payload: userSnapshot.data()
        });
  
        await auth.signOut();
      }
    } catch (error) {
      dispatch({ 
        type: UserActionTypes.SIGNUP_FAILED,
        payload: error
      });
    }
  } else {
    dispatch({ 
      type: UserActionTypes.SIGNUP_FAILED,
      payload: 'User with given email already exists!'
    });
  }
}

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
      payload: userSnap.data()
    });

    dispatch(openSnackbar('success', 'You have been successfully signed in!'));
  } catch (error) {
    dispatch({
      type: UserActionTypes.SIGNIN_FAILED,
      payload: error
    });

    dispatch(openSnackbar('error', 'Incorrect email or password! Please try again.'));
  }

}