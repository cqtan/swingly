import { createSelector } from "reselect";

const selectSnackbar = state => state.snackbar;

export const selectSnackbarState = createSelector(
  [selectSnackbar],
  (snackbar) => snackbar
);