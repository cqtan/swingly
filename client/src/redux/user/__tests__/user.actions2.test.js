import {
  setCurrentUser,
  signOut,
  signUp,
  signInWithEmail,
  editUser,
  deleteUser,
  signInWithProvider
} from '../user.actions';
import { UserActionTypes } from '../user.types';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { auth, firestore } from '../../../firebase/firebase.utils';
import * as userUtils from '../user.utils';

describe('User Actions', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore({});

  afterEach(() => {
    store.clearActions();
    jest.restoreAllMocks();
  });

  describe('setCurrentUser', () => {
    let mockUserAuth = null;
    let mockUserRef = null;

    const applyMocks = () => {
      jest.spyOn(userUtils, 'getCurrentUser').mockImplementation(() => mockUserAuth);
      jest.spyOn(userUtils, 'createUserProfileDocument').mockImplementation(() => mockUserRef);
    }

    it('should dispatch USER_NOT_LOADING if user has not signed out beforehand', async () => {
      mockUserAuth = null;
      applyMocks();

      await store.dispatch(setCurrentUser());      

      expect(store.getActions()[0].type).toBe(UserActionTypes.USER_LOADING);
      expect(store.getActions()[1].type).toBe(UserActionTypes.USER_NOT_LOADING);
    });

    it('should dispatch SET_CURRENT_USER_FAILED', async () => {
      mockUserAuth = true;
      mockUserRef = { get: () => { throw new Error('test error') }};
      applyMocks();

      await store.dispatch(setCurrentUser());    
      
      expect(store.getActions()[0].type).toBe(UserActionTypes.USER_LOADING);
      expect(store.getActions()[1].type).toBe(UserActionTypes.SET_CURRENT_USER_FAILED);
    });

    it('should dispatch SET_CURRENT_USER_SUCCESS', async () => {
      const mockSnap = { data: () => true };
      mockUserAuth = true;
      mockUserRef = { get: () => mockSnap };
      applyMocks();

      await store.dispatch(setCurrentUser());      

      expect(store.getActions()[0].type).toBe(UserActionTypes.USER_LOADING);
      expect(store.getActions()[1].type).toBe(UserActionTypes.SET_CURRENT_USER_SUCCESS);
    });
  });
});