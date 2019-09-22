import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  users: {},
  error: null,
  isLoading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.USER_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case UserActionTypes.USER_NOT_LOADING:
      return {
        ...state,
        isLoading: false
      };
    case UserActionTypes.SET_CURRENT_USER_SUCCESS:
    case UserActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        isLoading: false
      };
    case UserActionTypes.SET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        users: action.payload
      }
    case UserActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        currentUser: null,
        users: {
          ...state.users,
          [action.payload.id]: action.payload
        }
      }
    case UserActionTypes.SIGNOUT_SUCCESS: 
      return {
        ...state,
        currentUser: null
      }
    case UserActionTypes.DELETE_SUCCESS:
      const newUsers = { ...state.users };
      delete newUsers[state.currentUser];

      return {
        ...state,
        currentUser: null,
        users: newUsers,
        error: null
      };
    case UserActionTypes.EDIT_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          [state.currentUser]: {
            ...state.users[state.currentUser],
            ...action.payload
          }
        }
      };
    case UserActionTypes.FOLLOW_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          [state.currentUser]: {
            ...state.users[state.currentUser],
            following: {
              ...state.users[state.currentUser].following,
              [action.payload]: true
            }
          }
        }
      }
    case UserActionTypes.UNFOLLOW_SUCCESS:
      const newFollowing = { ...state.users[state.currentUser].following };
      delete newFollowing[action.payload];

      return {
        ...state,
        users: {
          ...state.users,
          [state.currentUser]: {
            ...state.users[state.currentUser],
            following: newFollowing
          }
        }
      }
    case UserActionTypes.SIGNUP_FAILED:
    case UserActionTypes.SET_CURRENT_USER_FAILED:
    case UserActionTypes.SET_USERS_FAILED:
    case UserActionTypes.SIGNIN_FAILED:
    case UserActionTypes.SIGNOUT_FAILED:
    case UserActionTypes.EDIT_FAILED:
    case UserActionTypes.DELETE_FAILED:
    case UserActionTypes.FOLLOW_FAILED:
    case UserActionTypes.UNFOLLOW_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default userReducer;