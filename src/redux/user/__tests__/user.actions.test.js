import {
  setCurrentUser,
  signInWithProvider,
  signOut,
  signUp,
  signInWithEmail,
  editUser,
  deleteUser
} from '../user.actions';
import { UserActionTypes } from '../user.types';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
  testUser,
  createTestUser,
  signInTestUser,
  deleteTestUser,
  deleteUserFromStore,
  signOutTestUser
} from '../../../firebase/firebase-test.utils';

describe('User Actions', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let initialState = {};
  const store = mockStore(initialState);

  beforeAll( async () => {
    await createTestUser();
  });

  afterAll(async () => {
    await signInTestUser();
    await deleteTestUser();
  })

  afterEach(async () => {
    store.clearActions();
  });

  describe('signInWithEmail', () => {
    it('should dispatch SIGNIN_FAILED and snackbar of type error', async () => {
      const mockValues = {
        email: 'test@email.com',
        password: '123123123'
      };
  
      await store.dispatch(signInWithEmail(mockValues));
      
      expect(store.getActions()[0].type).toBe(UserActionTypes.SIGNIN_FAILED);
      expect(store.getActions()[1].payload.type).toBe('error');
    });

    it('should dispatch SIGNIN_SUCCESS and snackbar to type success', async () => {
      await signOut();
      await store.dispatch(signInWithEmail(testUser));

      const userId = store.getActions()[0].payload.id;
      await deleteUserFromStore(userId);

      expect(store.getActions()[0].type).toBe(UserActionTypes.SIGNIN_SUCCESS);
      expect(store.getActions()[1].payload.type).toBe('success');
    });
  });

  describe('signUp', () => {
    it('should dispatch SIGNUP_FAILED and snackbar of type error (email already exists in store)', async () => {  
      await store.dispatch(signUp(testUser));
      
      expect(store.getActions()[0].type).toBe(UserActionTypes.SIGNUP_FAILED);
      expect(store.getActions()[1].payload.type).toBe('error');
    });

    it('should dispatch SIGNUP_FAILED and snackbar of type error (user exists in auth)', async () => {  
      await signInTestUser();
      await store.dispatch(signUp(testUser));
      
      expect(store.getActions()[0].type).toBe(UserActionTypes.SIGNUP_FAILED);
      expect(store.getActions()[1].payload.type).toBe('error');
    });

    it('should dispatch SIGNUP_SUCCESS and snackbar to type success', async () => {
      await deleteTestUser();
      await store.dispatch(signUp(testUser));

      expect(store.getActions()[0].type).toBe(UserActionTypes.SIGNUP_SUCCESS);
      expect(store.getActions()[1].payload.type).toBe('success');
    });
  });
});