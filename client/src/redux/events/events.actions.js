import { EventsActionTypes } from './events.types';
import { firestore, getEnvironment } from '../../firebase/firebase.utils';
import { openSnackbar } from '../snackbar/snackbar.actions';
import { eventsToObject } from './events.utils';
import axios from 'axios';

export const fetchEvents = () => async dispatch => {
  try {
    let eventsObj = null;
    if (getEnvironment() === 'development') {
      const res = await axios.get('/api/data/mockevents');      
      eventsObj = res.data;
      console.log('Using Local Events Data!', res.data);
    } else if (getEnvironment() === 'production' || getEnvironment() === 'test') {
      const eventsSnap = await firestore.collection(`${getEnvironment()}/data/events`).orderBy('start').get();

      if (eventsSnap.docs.length) {
        eventsObj = eventsToObject(eventsSnap.docs);
      } else {
        throw new Error('No Documents found');
      }
    } else {
      throw new Error('Environement not set!');
    }
    
    // const eventsSnap = await firestore.collection(`${getEnvironment()}/data/events`).orderBy('start').get();

    // if (eventsSnap.docs.length) {
    //   eventsObj = eventsToObject(eventsSnap.docs);
    // } else {
    //   throw new Error('No Documents found');
    // }

    dispatch({
      type: EventsActionTypes.FETCH_EVENTS_SUCCESS,
      payload: eventsObj
    });
    // dispatch(openSnackbar('success', 'Events successfully fetched!'));
  } catch (error) {    
    dispatch({type: EventsActionTypes.FETCH_EVENTS_FAILED });
    dispatch(openSnackbar('error', error.message));
  }
}
