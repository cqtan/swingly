import { createSelector } from "reselect";
import { selectCurrentUser } from "../user/user.selectors";
import memoize from 'lodash/memoize';
import moment from 'moment';

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

export const selectFilter = createSelector(
  [selectEvents],
  (events) => events.filter
);

export const selectGuestFilter = createSelector(
  [selectFilter],
  (filter) => filter.guestFilter
);

export const selectHostFilter = createSelector(
  [selectFilter],
  (filter) => filter.hostFilter
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

export const selectUpcomingEvents = createSelector(
  [selectSortedEvents],
  (events) => { 
    return events.filter(event => {
      if (moment(event.start.toDate()).isSameOrAfter(new Date(), 'day')) {
        return true
      } else {
        return false;
      }
    });
  }
);

export const selectFilteredEvents = createSelector(
  [selectSortedEvents, selectFilter, selectCurrentUser],
  (events, filter, currentUser) => {
    if ( !filter.guestFilter.includes("none") && selectCurrentUser) {
      return events.filter(event => {
        if (event.guests.hasOwnProperty(currentUser)) {
          return filter.guestFilter.includes(event.guests[currentUser]) ? true : false;
        } else {
          return false;
        }
      });
    } else {
      return events;
    }
  }
);

export const selectUpcomingFilteredEvents = createSelector(
  [selectUpcomingEvents, selectFilter, selectCurrentUser],
  (events, filter, currentUser) => {
    if ( !filter.guestFilter.includes("none") && selectCurrentUser) {
      return events.filter(event => {
        if (event.guests.hasOwnProperty(currentUser) && event.hosts.some(host => filter.hostFilter.includes(host))) {
          return filter.guestFilter.includes(event.guests[currentUser]) ? true : false;
        } else {
          return false;
        }
      });
    } else {
      return events;
    }
  }
)

export const selectEventsByUserId = createSelector(
  [selectUpcomingFilteredEvents],
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