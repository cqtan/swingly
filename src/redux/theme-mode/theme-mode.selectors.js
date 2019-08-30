import { createSelector } from "reselect";

const selectThemeMode = state => state.themeMode;

export const selectIsDarkMode = createSelector(
  [selectThemeMode],
  (themeMode) => themeMode.darkMode
);