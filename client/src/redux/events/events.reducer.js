import { EventsActionTypes } from './events.types';

const INITIAL_STATE = {
  events: {},
  isLoading: false,
  error: null
};
const eventsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EventsActionTypes.FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        isLoading: false,
        error: null
      }
    case EventsActionTypes.FETCH_EVENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default: {
      return {
        ...state,
        isLoading: false,
        error: null
      }
    } 
  }
}

export default eventsReducer;
