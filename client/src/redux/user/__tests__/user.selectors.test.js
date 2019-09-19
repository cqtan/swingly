import { 
  selectCurrentUser,
  selectIsUserLoading
} from '../user.selectors';

describe('User Selectors', () => {
  const mockState = {
    user: {
      currentUser: 'asdfasdfasdf',
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
});