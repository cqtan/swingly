import { EventEditActionTypes } from './event-edit.types';

export const setupEventEdit = (event, lastRoute) => dispatch => {
  dispatch({
    type: EventEditActionTypes.EDIT_PAGE_OPEN,
    payload: {
      event,
      lastRoute
    }
  });
}

export const setScrollPosForEventEdit = scrollPos => dispatch => {
  dispatch({
    type: EventEditActionTypes.EDIT_PAGE_SET_SCROLLPOS,
    payload: scrollPos
  });
}

export const cleanUpEventEdit = () => dispatch => {
  dispatch({
    type: EventEditActionTypes.EDIT_PAGE_CLEAN_UP
  });
}