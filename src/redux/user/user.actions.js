import { UserActionTypes } from './user.types';
import { createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils';

// export const setCurrentUser = user => ({
//   type: UserActionTypes.SET_CURRENT_USER,
//   payload: user
// });

export const setCurrentUser = () => async dispatch => {
  try {
    const userAuth = await getCurrentUser();
    if (!userAuth) return;

    console.log('userAuth: ', userAuth);
    
    const userRef = await createUserProfileDocument(userAuth);
    const userSnapshot = await userRef.get();

    console.log('snap: ', userSnapshot);

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
