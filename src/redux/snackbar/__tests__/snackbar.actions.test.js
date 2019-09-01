import SnackbarActionTypes from '../snackbar.types';
import { 
  openSnackbar,
  closeSnackbar
} from '../snackbar.actions';

describe('Snackbar Actions', () => {
  describe('openSnackbar', () => {
    it('should create the openSnackbar Action', () => {
      const mockType = 'success';
      const mockText = 'Test';

      expect(openSnackbar(mockType, mockText)).toEqual({
        type: SnackbarActionTypes.OPEN_SNACKBAR,
        payload: {
          type: mockType,
          text: mockText
        }
      });
    });
  });

  describe('closeSnackbar', () => {
    it('should create the closeSnackbar Action', () => {
      expect(closeSnackbar().type).toEqual(SnackbarActionTypes.CLOSE_SNACKBAR);
    });
  });
});
