import { createSelector } from 'reselect';
import memoize from 'lodash/memoize';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectUserIsLoading = createSelector(
  [selectUser],
  (user) => user.isLoading
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

export const selectCurrentUserFollowing = createSelector(
  [selectUsers, selectCurrentUser],
  (users, currentUser) => users[currentUser].following
);

export const selectFollowedUsersList = createSelector(
  [selectUsers, selectCurrentUser],
  (users, currentUser) => Object.values(users).filter(user => {
    if (currentUser && users[currentUser].following.hasOwnProperty(user.id)) {
      return user.id !== currentUser ? true : false;
    } else {
      return false;
    }
  })
);

export const selectUnfollowedUsersList = createSelector(
  [selectUsers, selectCurrentUser],
  (users, currentUser) => Object.values(users).filter(user => {
    if (currentUser && !users[currentUser].following.hasOwnProperty(user.id)) {
      return user.id !== currentUser ? true : false;
    } else {
      return false;
    }
  })
);

