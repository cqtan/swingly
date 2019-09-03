import { EventsActionTypes } from './events.types';
import { firestore, getRootPath } from '../../firebase/firebase.utils';
import { openSnackbar } from '../snackbar/snackbar.actions';
import { eventsToObject } from './events.utils';

export const fetchEvents = () => async dispatch => {
  try {
    const eventsSnap = await firestore.collection(`${getRootPath()}/data/events`).get();

    if (eventsSnap.docs.length) {
      const eventsObj = eventsToObject(eventsSnap.docs);
      
      dispatch({
        type: EventsActionTypes.FETCH_EVENTS_SUCCESS,
        payload: eventsObj
      });

      dispatch(openSnackbar('success', 'Events successfully fetched!'));
    } else {
      dispatch({ type: EventsActionTypes.FETCH_EVENTS_FAILED });
      dispatch(openSnackbar('error', 'No events found!'));
    }
  } catch (error) {    
    dispatch({type: EventsActionTypes.FETCH_EVENTS_FAILED });
    dispatch(openSnackbar('error', 'Events failed to fetch!'));
  }
}