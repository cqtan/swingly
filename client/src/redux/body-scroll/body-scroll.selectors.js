import { createSelector } from "reselect";
import memoize from 'lodash/memoize';

const selectBodyScroll = state => state.bodyScroll;

export const selectScrollTopByPageName = createSelector(
  [selectBodyScroll],
  (bodyScroll) => memoize( pageName => {
    return bodyScroll.hasOwnProperty(pageName) ? bodyScroll[pageName] : 0;
  })
);