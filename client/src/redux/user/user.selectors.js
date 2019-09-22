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

export const selectUsers = createSelector(
  [selectUser],
  (user) => Object.keys(user.users).length ? user.users : null
);

export const selectUserById = createSelector(
  [selectUsers],
  users => memoize(userId => {
    return users.hasOwnProperty(userId) ? users[userId] : false;
  })
);

