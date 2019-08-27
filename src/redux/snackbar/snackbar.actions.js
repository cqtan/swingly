import SnackbarActionTypes from './snackbar.types';

export const openSnackbar = (type, text) => ({
  type: SnackbarActionTypes.OPEN_SNACKBAR,
  payload: {
    type,
    text
  }
});

export const closeSnackbar = () => ({
  type: SnackbarActionTypes.CLOSE_SNACKBAR
})