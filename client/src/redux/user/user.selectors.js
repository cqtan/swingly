import { createSelector } from 'reselect';
import memoize from 'lodash/memoize';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectIsUserLoading = createSelector(
  [selectUser],
  (user) => user.isLoading
);

export const selectCurrentUsername = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser ? currentUser.username : null
);

export const selectCurrentUserId = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser ? currentUser.id : null
);

export const selectUsers = createSelector(
  [selectUser],
  (user) => user.users
);

export const selectUserById = createSelector(
  [selectUsers],
  users => memoize(userId => {
    return users.hasOwnProperty(userId) ? users[userId] : false;
  })
);

