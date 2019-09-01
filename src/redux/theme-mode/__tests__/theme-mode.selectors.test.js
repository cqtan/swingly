import { selectIsDarkMode } from '../theme-mode.selectors';

describe('Theme Mode Selectors', () => {

  describe(('selectIsDarkMode'), () => {
    it(' should return false if darkmode is false', () => {
      const state = { 
        themeMode: { 
          darkMode: false 
        }
      };
      expect(selectIsDarkMode(state)).toBe(false);
    });
  });

});
