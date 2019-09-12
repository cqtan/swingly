import { createSelector } from "reselect";

const selectBodyScroll = state => state.bodyScroll;

export const selectScrollTop = createSelector(
  [selectBodyScroll],
  (bodyScroll) => bodyScroll.scrollTop
);