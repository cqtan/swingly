import {
  setCurrentUser,
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
  createTestUserInStore,
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

  beforeEach(async () => {
    await createTestUser();    
  });

  afterEach(async () => {
    store.clearActions();
    await signInTestUser();
    const id = await deleteTestUser();
    await deleteUserFromStore(id);
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
      await store.dispatch(signInWithEmail(testUser));

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
      await signInTestUser();
      await deleteTestUser();
      await store.dispatch(signUp(testUser));
      
      expect(store.getActions()[0].type).toBe(UserActionTypes.SIGNUP_SUCCESS);
      expect(store.getActions()[1].payload.type).toBe('success');
    });
  });

  describe('setCurrentUser', () => {
    it('should dispatch SET_CURRENT_USER_SUCCESS', async () => {
      await signInTestUser();
      await store.dispatch(setCurrentUser());
      
      expect(store.getActions()[0].type).toBe(UserActionTypes.USER_LOADING);
      expect(store.getActions()[1].type).toBe(UserActionTypes.SET_CURRENT_USER_SUCCESS);
    });

    it('should dispatch USER_NOT_LOADING if user has not signed out beforehand', async() => {
      await signOutTestUser();
      await store.dispatch(setCurrentUser());

      expect(store.getActions()[0].type).toBe(UserActionTypes.USER_LOADING);
      expect(store.getActions()[1].type).toBe(UserActionTypes.USER_NOT_LOADING);
    });
  });

  describe('signOut', () => {
    it('should dispatch SIGNOUT_SUCCESS', async () => {
      await store.dispatch(signOut());

      expect(store.getActions()[0].type).toBe(UserActionTypes.SIGNOUT_SUCCESS);
      expect(store.getActions()[1].payload.type).toBe('success');
    });
  });

  describe('editUser', () => {
    it('should dispatch only snackbar with payload type error if nothing to edit', async () => {
      await store.dispatch(editUser(testUser, testUser));

      expect(store.getActions()[0].payload.type).toBe('error');
    });

    it('should dispatch EDIT_SUCCESS if username is different', async () => {
      const mockValues = {
        username: 'Test User 2',
        description: testUser.description
      };

      const user = await signInTestUser();
      await createTestUserInStore(user);
      testUser.id = user.uid;
      
      await store.dispatch(editUser(mockValues, testUser));      

      expect(store.getActions()[0].type).toBe(UserActionTypes.EDIT_SUCCESS);
      expect(store.getActions()[1].payload.type).toBe('success');
    });

    it('should dispatch EDIT_SUCCESS if description is different', async () => {
      const mockValues = {
        username: testUser.username,
        description: 'I am a different test user.'
      };

      const user = await signInTestUser();
      await createTestUserInStore(user);
      testUser.id = user.uid;
      
      await store.dispatch(editUser(mockValues, testUser));      

      expect(store.getActions()[0].type).toBe(UserActionTypes.EDIT_SUCCESS);
      expect(store.getActions()[1].payload.type).toBe('success');
    });

    describe('deleteUser', () => {
      it('should dispatch DELETE_FAILED and snackbar payload type error if user is not signed in', async () => {
        await store.dispatch(deleteUser());

        expect(store.getActions()[0].type).toBe(UserActionTypes.DELETE_FAILED);
        expect(store.getActions()[1].payload.type).toBe('error');    
      });

      it('should dispatch DELETE_SUCCESS', async () => {
        const user = await signInTestUser();
        await createTestUserInStore(user);
        await store.dispatch(deleteUser());

        expect(store.getActions()[0].type).toBe(UserActionTypes.DELETE_SUCCESS);
        expect(store.getActions()[1].payload.type).toBe('success');
      });
    });  
  });
});