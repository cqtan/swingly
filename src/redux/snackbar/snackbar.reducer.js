import SnackActionTypes from './snackbar.types';

const INITIAL_STATE = {
  type: '',
  text: '',
  isOpen: false
};

const snackbarReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SnackActionTypes.OPEN_SNACKBAR:
      return {
        ...action.payload,
        isOpen: true
      };
    case SnackActionTypes.CLOSE_SNACKBAR:
      return {
        ...state,
        isOpen: false
      }
    default:
      return {
        ...state
      };
  }
}

export default snackbarReducer;
