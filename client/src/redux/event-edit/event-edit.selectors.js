import { createSelector } from "reselect";

export const selectEditEvent = state => state.eventEdit;

export const selectEventForEdit = createSelector(
  [selectEditEvent],
  (eventEdit) => eventEdit.event
);

export const selectEditEventScrollPos = createSelector(
  [selectEditEvent],
  (eventEdit) => eventEdit.scrollPos
);