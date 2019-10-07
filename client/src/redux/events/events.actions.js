import { EventsActionTypes } from './events.types';
import { firestore, getEnvironment, deleteFieldValue, dateToTimestamp, firebaseService } from '../../firebase/firebase.utils';
import { openSnackbar } from '../snackbar/snackbar.actions';
import { eventsToObject, formatMockEvents } from './events.utils';
import axios from 'axios';

export const fetchEvents = () => async dispatch => {
  try {
    let eventsObj = null;
    dispatch({type: EventsActionTypes.EVENTS_IS_LOADING});
    if (getEnvironment() === 'development') {
      const res = await axios.get('/api/data/mockevents');
      eventsObj = formatMockEvents(res.data);
      console.log('Using Local Events Data!', eventsObj);
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
  } catch (error) {    
    dispatch({type: EventsActionTypes.FETCH_EVENTS_FAILED });
    dispatch(openSnackbar('error', error.message));
  }
}

export const setEventGuest = (userId, event, guestType) => async dispatch => {
  const eventRef = firestore.doc(`${getEnvironment()}/data/events/${event.id}`);

  try {
    await eventRef.update({
      [`guests.${userId}`]: guestType    
    });

    const newGuestList = {
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
  } catch (err) {
    dispatch({
      type: EventsActionTypes.SET_EVENT_GUEST_FAILED,
      payload: err
    });
  }
}

export const deleteEventGuest = (userId, event) => async dispatch => {
  const eventRef = firestore.doc(`${getEnvironment()}/data/events/${event.id}`);
  let newGuestList = null;

  try {
    eventRef.update({
      [`guests.${userId}`]: deleteFieldValue()
    });

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
  } catch (err) {
    dispatch({
      type: EventsActionTypes.DELETE_EVENT_GUEST_FAILED,
      payload: err
    });
  }
}

export const createEvent = values => async dispatch => {
  try {
    const currentUser = firebaseService.auth().currentUser.uid;
    
    const defaultValues = {
      cancelled: false,
      courses: [],
      guests: { [currentUser]: true },
      images: [],
      otherFees: [],
      type: 'social'
    }

    values.start = dateToTimestamp(values.start);
    values.end = dateToTimestamp(values.end);
  
    const eventRef = firestore.collection(`${getEnvironment()}/data/events`).doc();
    const newEvent = {
      id: eventRef.id,
      ...defaultValues,
      ...values
    }

    await eventRef.set(newEvent);

    dispatch({
      type: EventsActionTypes.CREATE_EVENT_SUCCESS,
      payload: {
        eventId: newEvent.id,
        event: newEvent
      }
    });

    dispatch(openSnackbar("success", "Event successfully created!"));
  } catch (err) {
    dispatch({
      type: EventsActionTypes.CREATE_EVENT_FAILED,
      payload: err
    });

    openSnackbar("error", "Event creation failed!")
  }
}

export const editEvent = (event, values) => async dispatch => {
  try {
    const eventRef = firestore.doc(`${getEnvironment()}/data/events/${event.id}`);
    const eventSnap = await eventRef.get();
    const batch = firestore.batch();

    values.start = dateToTimestamp(values.start);
    values.end = dateToTimestamp(values.end);
    
    if (eventSnap.exists) {
      Object.entries(values).forEach(([key, val]) => {
        if (val !== event[key]) {
          batch.update(eventRef, {
            [key]: val
          });
        }
      });
      await batch.commit();

      dispatch({
        type: EventsActionTypes.EDIT_EVENT_SUCCESS,
        payload: {
          eventId: event.id,
          values
        }
      })
      dispatch(openSnackbar("success", "Event successfully modified!"));
    }
  } catch (err) {
    dispatch({
      type: EventsActionTypes.EDIT_EVENT_FAILED,
      payload: err
    })
    openSnackbar("error", "Event failed to modify!");
  }
}

export const deleteEvent = eventId => async dispatch => {
  try {
    await firestore.doc(`${getEnvironment()}/data/events/${eventId}`).delete();
    dispatch({
      type: EventsActionTypes.DELETE_EVENT_SUCCESS,
      payload: eventId
    });

    dispatch(openSnackbar("success", "Event successfully modified!"));
  } catch (err) {
    dispatch({
      type: EventsActionTypes.DELETE_EVENT_FAILED,
      payload: err
    })
    openSnackbar("error", "Event failed to delete!");
  }
}

export const setGuestFilter = guestFilter => dispatch => {
  dispatch({
    type: EventsActionTypes.SET_GUEST_FILTER,
    payload: guestFilter
  });
}

export const setHostFilter = userId => dispatch => {
  dispatch({
    type: EventsActionTypes.SET_HOST_FILTER,
    payload: userId
  });
}