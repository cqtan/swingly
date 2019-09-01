import { 
  selectCurrentUser,
  selectIsUserLoading,
  selectCurrentUsername
} from '../user.selectors';

describe('User Selectors', () => {
  const mockState = {
    user: {
      currentUser: {
        id: '123',
        username: 'testuser',
        email: 'testpassword'
      },
      isLoading: false
    }
  };

  describe('selectCurrentUser', () => {
    it('should return the current user', () => {
      expect(selectCurrentUser(mockState)).toEqual(mockState.user.currentUser);
    });
  });

  describe('selectIsUserLoading', () => {
    it('should return the isLoading boolean value', () => {
      expect(selectIsUserLoading(mockState)).toBe(mockState.user.isLoading);
    });
  });

  describe('selectCurrenUsername', () => {
    it('should return the username of currentUser', () => {
      expect(selectCurrentUsername(mockState)).toBe(mockState.user.currentUser.username);
    });
  });
});