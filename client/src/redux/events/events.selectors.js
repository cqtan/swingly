import { createSelector } from "reselect";

const selectEvents = state => state.events;

export const selectAllEvents = createSelector(
  [selectEvents],
  (events) => events.events
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
    const sortedEvents = Object.values(events).sort((a, b) => {
      a = a.start.toDate();
      b = b.start.toDate();
      return a > b ? 1 : a < b ? -1 : 0;
    });
    return sortedEvents; 
  }
);