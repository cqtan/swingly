import { createSelector } from "reselect";
import { selectCurrentUser } from "../user/user.selectors";
import memoize from 'lodash/memoize';

export const sortByDate = eventsObj => {
  return Object.values(eventsObj).sort((a, b) => {
    a = a.start.toDate();
    b = b.start.toDate();

    return a > b ? 1 : a < b ? -1 : 0;
  });
}

const selectEvents = state => state.events;

export const selectAllEvents = createSelector(
  [selectEvents],
  (events) => events.events
);

export const selectEventById = createSelector(
  [selectAllEvents],
  (events) => memoize(id => {
    return events.hasOwnProperty(id) ? events[id]: null
  })
);

export const selectEventsAreLoading = createSelector(
  [selectEvents],
  (events) => events.isLoading
);

export const selectFilterType = createSelector(
  [selectEvents],
  (events) => events.filterType
);

export const selectEventsLoaded = createSelector(
  [selectAllEvents],
  (events) =>  Object.keys(events).length > 0
);

export const selectSortedEvents = createSelector(
  [selectAllEvents],
  (events) => {
    return sortByDate(events);
  }
);

export const selectCurrentUserEvents = createSelector(
  [selectAllEvents, selectCurrentUser],
  (events, currentUser) => {
    const userEvents = Object.values(events).reduce((prev, val) => {
      if (val.hosts[0] === currentUser) {
        prev[val.id] = val;
      }
      return prev;
    }, {});

    return sortByDate(userEvents);
  }
);

// const filter = {
//   guestType: [],
//   hosts: [],
// }

export const selectFilteredEvents = createSelector(
  [selectSortedEvents, selectFilterType, selectCurrentUser],
  (events, filterType, currentUser) => {
    if (filterType !== 'none' && selectCurrentUser) {
      return events.filter(event => {
        if (event.guests.hasOwnProperty(currentUser)) {
          return event.guests[currentUser] === filterType ? true : false;
        } else {
          return false;
        }
      });
    } else {
      return events;
    }
  }
);

export const selectInterestedEvents = createSelector(
  [selectSortedEvents, selectCurrentUser],
  (events, currentUser) => {
    if (selectCurrentUser) {
      return events.filter(event => {
        if (event.guests.hasOwnProperty(currentUser)) {
          return event.guests[currentUser] === 'interested' ? true : false;
        } else {
          return false;
        }
      });
    } else {
      return events;
    }
  }
);

export const selectGoingEvents = createSelector(
  [selectSortedEvents, selectCurrentUser],
  (events, currentUser) => {
    if (selectCurrentUser) {
      return events.filter(event => {
        if (event.guests.hasOwnProperty(currentUser)) {
          return event.guests[currentUser] === 'going' ? true : false;
        } else {
          return false;
        }
      });
    } else {
      return events;
    }
  }
);

export const selectEventsByUserId = createSelector(
  [selectFilteredEvents],
  events => memoize(userId => {
    if (userId === null) {
      return events;
    } else {
      return events.filter(event => {
        if (event.hosts.includes(userId)) {
          return true;
        } else {
          return false;
        }
      });
    }
  })
);