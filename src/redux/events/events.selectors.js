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