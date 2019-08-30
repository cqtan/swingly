import { EventsActionTypes } from './events.types';
import { firestore } from '../../firebase/firebase.utils';
import { openSnackbar } from '../snackbar/snackbar.actions';

export const fetchEvents = () => async dispatch => {
  try {
    const eventsSnap = await firestore.collection('mockEvents').get();
  
    if (eventsSnap) {
      const collectionAsObject = eventsSnap.docs.reduce((prev, event) => {
        prev[event.data().id] = event.data();
        return prev;
      }, {}); 
      
      dispatch({
        type: EventsActionTypes.FETCH_EVENTS_SUCCESS,
        payload: collectionAsObject
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