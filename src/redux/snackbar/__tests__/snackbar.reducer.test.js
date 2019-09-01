import SnackbarActionTypes from '../snackbar.types';
import snackbarReducer from '../snackbar.reducer';

describe('Snackbar Reducer', () => {
  const initialState = {
    type: '',
    text: '',
    isOpen: false
  };

  it('should return the inital state', () => {
    expect(snackbarReducer(undefined, {})).toEqual(initialState);
  });

  it('should set a text and type string value as well as set isOpen to true on OPEN_SNACKBAR.', () => {
    const mockAction = {
      type: SnackbarActionTypes.OPEN_SNACKBAR,
      payload: {
        type: 'success',
        text: 'test test test'
      }
    }

    const mockResult = {
      ...mockAction.payload,
      isOpen: true
    };

    expect(snackbarReducer(initialState, mockAction)).toEqual(mockResult);
  });

  it('should set the isOpen value to false', () => {
    const mockState = {
      ...initialState,
      isOpen: true
    }

    expect(snackbarReducer(mockState, { type: SnackbarActionTypes.CLOSE_SNACKBAR }).isOpen).toBe(false);
  });
});