import { 
  selectCurrentUser,
  selectUserIsLoading
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

  describe('selectUserIsLoading', () => {
    it('should return the isLoading boolean value', () => {
      expect(selectUserIsLoading(mockState)).toBe(mockState.user.isLoading);
    });
  });
});