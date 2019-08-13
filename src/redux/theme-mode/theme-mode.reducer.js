import ThemeModeActionTypes from './theme-mode.types';

const INITIAL_STATE = {
  darkMode: false
};

const themeModeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemeModeActionTypes.TOGGLE_THEME:
      return {
        darkMode: !state.darkMode
      };
    default:
      return state;
  }
};

export default themeModeReducer;