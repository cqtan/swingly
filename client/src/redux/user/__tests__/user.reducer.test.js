import { UserActionTypes } from '../user.types';
import userReducer from '../user.reducer';

describe('User Reducer', () => {
  const initialState = {
    currentUser: null,
    users: {},
    error: null,
    isLoading: false,
  };

  const mockState = {
    currentUser: 'asdfasdfasdf',
    users: {},
    isLoading: false,
    error: null
  };

  describe('should return the initial state', () => {
    it('Default', () => {
      expect(userReducer(undefined, {})).toEqual(initialState);
    });
  });

  describe('should set isLoading to true', () => {
    it('USER_LOADING', () => {
      const mockAction = { type: UserActionTypes.USER_LOADING };
      expect(userReducer(initialState, mockAction).isLoading).toBe(true);
    });
  });

  describe('should set isLoading to false', () => {
    it('USER_NOT_LOADING', () => {
      const mockState = {
        ...initialState,
        isLoading: true
      };
      const mockAction = { type: UserActionTypes.USER_NOT_LOADING };
  
      expect(userReducer(mockState, mockAction).isLoading).toBe(false);
    });
  });

  describe('should set payload to currentUser and isLoading to false', () => {
    it('SET_CURRENT_USER_SUCCESS', () => {
      const mockAction = {
        type: UserActionTypes.SET_CURRENT_USER_SUCCESS,
        payload: mockState.currentUser
      };

      expect(userReducer(initialState, mockAction)).toEqual(mockState);
    });

    it('SIGNIN_SUCCESS', () => {
      const mockAction = {
        type: UserActionTypes.SIGNIN_SUCCESS,
        payload: mockState.currentUser
      };
  
      expect(userReducer(initialState, mockAction)).toEqual(mockState);
    });
  });

  describe('should set currentUser to null', () => {
    const mockUser = {
      id: '1234',
      username: 'test_name1'
    }

    it('SIGNUP_SUCCESS', () => {
      const mockAction = { 
        type: UserActionTypes.SIGNUP_SUCCESS,
        payload: mockUser 
      };

      const newState = {
        ...initialState,
        users: {
          [mockUser.id]: {
            ...mockUser
          }
        }
      }
  
      expect(userReducer(mockState, mockAction)).toEqual(newState);
    });

    it('SIGNOUT_SUCCESS', () => {
      const mockAction = { type: UserActionTypes.SIGNOUT_SUCCESS };
  
      expect(userReducer(mockState, mockAction)).toEqual(initialState);
    });

    it('DELETE_SUCCESS', () => {
      const mockAction = { type: UserActionTypes.DELETE_SUCCESS };
  
      expect(userReducer(mockState, mockAction)).toEqual(initialState);
    });
  });

  describe('should return a partially modified currentUser', () => {
    it('EDIT_SUCCESS', () => {
      const mockAction = {
        type: UserActionTypes.EDIT_SUCCESS,
        payload: {
          username: 'test_name_new_and_exciting'
        }
      };

      const mockExpected = {
        ...initialState,
        currentUser: 'asdf1234',
        users: {
          ...initialState.users,
          asdf1234: {
            id: 'asdf1234',
            username: 'test_name_new_and_exciting'
          }
        }
      }

      const mockInitial = {
        ...initialState,
        currentUser: 'asdf1234',
        users: {
          ...initialState.users,
          asdf1234: {
            id: 'asdf1234',
            username: 'test_name_old_and_boring'
          }
        }
      }
  
      expect(userReducer(mockInitial, mockAction)).toEqual(mockExpected);
    });
  });

  describe('should return the current state and an error object', () => {
    const error = 'I have errored!';
    const mockExpected = {
      ...mockState,
      error
    };

    it('SIGNUP_FAILED,', () => {
      const mockAction = { type: UserActionTypes.SIGNUP_FAILED, payload: error };
      
      expect(userReducer(mockState, mockAction)).toEqual(mockExpected);
    });

    it('SET_CURRENT_USER_FAILED', () => {
      const mockAction = { type: UserActionTypes.SET_CURRENT_USER_FAILED, payload: error };
      
      expect(userReducer(mockState, mockAction)).toEqual(mockExpected);
    });

    it('SIGNIN_FAILED', () => {
      const mockAction = { type: UserActionTypes.SIGNIN_FAILED, payload: error };
       
      expect(userReducer(mockState, mockAction)).toEqual(mockExpected);
    });

    it('SIGNOUT_FAILED', () => {
      const mockAction = { type: UserActionTypes.SIGNOUT_FAILED, payload: error };
       
      expect(userReducer(mockState, mockAction)).toEqual(mockExpected);
    });

    it('EDIT_FAILED', () => {
      const mockAction = { type: UserActionTypes.EDIT_FAILED, payload: error };
  
      expect(userReducer(mockState, mockAction)).toEqual(mockExpected);
    });

    it('DELETE_FAILED', () => {
      const mockAction = { type: UserActionTypes.DELETE_FAILED, payload: error };
  
      expect(userReducer(mockState, mockAction)).toEqual(mockExpected);
    });
  });

});
