import { createSelector } from 'reselect';
import { selectAllEvents, sortByDate, selectFilterType, selectSortedEvents } from '../events/events.selectors';

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

export const selectCurrentUserEvents = createSelector(
  [selectAllEvents, selectCurrentUserId],
  (events, currentUserId) => {
    const userEvents = Object.values(events).reduce((prev, val) => {
      if (val.hosts[0] === currentUserId) {
        prev[val.id] = val;
      }
      return prev;
    }, {});

    return sortByDate(userEvents);
  }
);

export const selectFilteredEvents = createSelector(
  [selectSortedEvents, selectFilterType, selectCurrentUserId],
  (events, filterType, currentUserId) => {
    if (filterType !== 'none' && selectCurrentUserId) {
      return events.filter(event => {
        if (event.guests.hasOwnProperty(currentUserId)) {
          return event.guests[currentUserId] === filterType ? true : false;
        } else {
          return false;
        }
      });
    } else {
      return events;
    }
  }
);