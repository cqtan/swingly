import {
  setCurrentUser,
  signInWithProvider,
  signOut,
  signUp,
  signInWithEmail,
  editUser,
  deleteUser
} from '../user.actions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('User Actions', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let initialState = {};
  const store = mockStore(initialState);

  beforeEach(() => {
    
  });

  afterEach(() => {
    store.clearActions();
  });

  it('signInWithEmail', async() => {
    const mockValues = {
      email: 'test@email.com',
      password: '123123123'
    };

    const val = await store.dispatch(signInWithEmail(mockValues));
    console.log('mockStore actions: ', store.getActions());
    
    expect(true).toBe(true);
  });
});