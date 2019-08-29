import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  loading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.USER_LOADING:
      return {
        ...state,
        loading: true
      }
    case UserActionTypes.USER_NOT_LOADING:
      return {
        ...state,
        loading: false
      };
    case UserActionTypes.SET_CURRENT_USER_SUCCESS:
    case UserActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        loading: false
      };
    case UserActionTypes.SIGNUP_SUCCESS:
    case UserActionTypes.SIGNOUT_SUCCESS:
    case UserActionTypes.DELETE_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.EDIT_SUCCESS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...action.payload
        }
      };
    case UserActionTypes.SIGNUP_FAILED:
    case UserActionTypes.SET_CURRENT_USER_FAILED:
    case UserActionTypes.SIGNIN_FAILED:
    case UserActionTypes.SIGNOUT_FAILED:
    case UserActionTypes.EDIT_FAILED:
    case UserActionTypes.DELETE_FAILED:
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