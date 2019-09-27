import ThemeModeActionTypes from '../theme-mode.types';
import themeModeReducer from '../theme-mode.reducer';

const initialState = {
  darkMode: true
};

describe('Theme Mode Reducer', () => {

  it('should return the initial state', () => {
    expect(themeModeReducer(undefined, {})).toEqual(initialState);
  });

  it('should toggle darkMode to true', () => {
    const payload = {
      type: ThemeModeActionTypes.TOGGLE_THEME,
    };

    expect(themeModeReducer(initialState, payload).darkMode).toBe(false);
  });

});