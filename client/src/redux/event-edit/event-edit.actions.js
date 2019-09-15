import { EventEditActionTypes } from './event-edit.types';

export const openEditEvent = (event, history) => dispatch => {
  console.log('History: ', history);
  const currentRoute = history.location.pathname;
  const scrollPos = window.scrollY;
  history.push('/event-edit');

  dispatch({
    type: EventEditActionTypes.EDIT_PAGE_OPEN_SUCCESS,
    payload: {
      event,
      currentRoute,
      scrollPos
    }
  });
}

// export const closeEditEvent = (history) => dispatch => {
//   console.log('History: ', history);

//   dispatch({
//     type: EventEditActionTypes.EDIT_PAGE_CLOSE_SUCCESS
//   });
// }