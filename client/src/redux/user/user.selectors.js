import { createSelector } from 'reselect';

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

export const selectUserById = id => createSelector(
  [selectUsers],
  (users) => users[id]
);

