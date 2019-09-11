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

export const setEventGuest = (userId, event, guestType) => async dispatch => {
  // const newEvent = {...event};
  // const eventRef = firestore.doc(`${getEnvironment()}/data/events/${event.id}`);
  // const eventSnap = await eventRef.get();
  let newGuestList = null;

  try {
    // if (eventSnap.exists) {
      // if (!event.guestList.hasOwnProperty(userId)) {
        // await eventRef.update({
        //   guestList: {
        //     ...event.guestList,
        //     userId: guestType 
        //   }
        // });

        newGuestList = {
          ...event.guests,
          [userId]: guestType
        }

        dispatch({
          type: EventsActionTypes.SET_EVENT_GUEST_SUCCESS,
          payload: { 
            eventId: event.id,
            guests: newGuestList
          }
        });
      // } else {
      //   // await eventRef.update({
      //   //   guestList: {
      //   //     ...event.guestList,
      //   //     userId: delete 
      //   //   }
      //   // });
      //   console.log('Set event guest error: ');
      // }
    // }    
  } catch (err) {
    dispatch({
      type: EventsActionTypes.SET_EVENT_GUEST_FAILED,
      payload: err
    });
  }
}

export const deleteEventGuest = (userId, event) => async dispatch => {
  // const eventRef = firestore.doc(`${getEnvironment()}/data/events/${event.id}`);
  // const eventSnap = await eventRef.get();
  let newGuestList = null;

  try {
    // if (eventSnap.exists) {
      newGuestList = {
        ...event.guests,
      };
      delete newGuestList[userId];

      dispatch({
        type: EventsActionTypes.DELETE_EVENT_GUEST_SUCCESS,
        payload: { 
          eventId: event.id,
          guests: newGuestList
        }
      });
    // }
  } catch (err) {
    dispatch({
      type: EventsActionTypes.DELETE_EVENT_GUEST_FAILED,
      payload: err
    });
  }
}
