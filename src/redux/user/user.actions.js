import { UserActionTypes } from './user.types';
import { auth, getCurrentUser, createUserProfileDocument } from '../../firebase/firebase.utils';

// export const setCurrentUser = user => ({
//   type: UserActionTypes.SET_CURRENT_USER,
//   payload: user
// });

export const setCurrentUser = () => async dispatch => {
  try {
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
