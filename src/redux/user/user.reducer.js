import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  loading: false,
  data: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.USER_LOADING:
      return {
        ...state,
        loading: true
      }
    case UserActionTypes.SET_CURRENT_USER_SUCCESS:
    case UserActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        loading: false
      };
    case UserActionTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.SIGNUP_SUCCESS:
    case UserActionTypes.SIGNUP_FAILED:
      return {
        ...state,
        data: action.payload
      };
    case UserActionTypes.SET_CURRENT_USER_FAILED:
    case UserActionTypes.SIGNIN_FAILED:
    case UserActionTypes.SIGNOUT_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default userReducer;