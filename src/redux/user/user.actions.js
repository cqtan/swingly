import { UserActionTypes } from './user.types';
import { 
  createUserProfileDocument, 
  getCurrentUser,
  signInWithGithub,
  signInWithGoogle,
} from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils';

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
