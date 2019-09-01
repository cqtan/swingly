import ThemeModeActionTypes from '../theme-mode.types';
import { toggleTheme } from '../theme-mode.actions';

describe('Theme-Mode Actions', () => {

  describe('toggleTheme action', () => {
    it('should create the toggleTheme action', () => {
      expect(toggleTheme().type).toEqual(ThemeModeActionTypes.TOGGLE_THEME);
    });
  });


});