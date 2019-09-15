import { EventEditActionTypes } from './event-edit.types';

export const setupEventEdit = (event, lastRoute, scrollPos) => dispatch => {
  dispatch({
    type: EventEditActionTypes.EDIT_PAGE_OPEN,
    payload: {
      event,
      lastRoute,
      scrollPos
    }
  });
}

export const cleanUpEventEdit = () => dispatch => {
  dispatch({
    type: EventEditActionTypes.EDIT_PAGE_CLEAN_UP
  });
}