import { selectSnackbarState } from '../snackbar.selectors';

describe('Snackbar Selectors', () => {
  describe('selectSnackbarState', () => {
    it('should return the snackbar state', () => {
      const mockState = {
        snackbar: {
          type: 'success',
          text: 'test test test',
          isOpen: false
        }
      };      

      expect(selectSnackbarState(mockState)).toEqual(mockState.snackbar);
    });
  });

});