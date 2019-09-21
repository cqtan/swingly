import { EventsActionTypes } from './events.types';

const INITIAL_STATE = {
  events: {},
  isLoading: false,
  filter: {
    guestFilter: ["none"],
    hostFilter: ['A8WnU1fmQnWQ3bjvI6PYro32Tjh1', 'wrlw2iC2tsOrM02iLm6OyUXfIv33']
  },
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
    case EventsActionTypes.SET_EVENT_GUEST_SUCCESS:
    case EventsActionTypes.DELETE_EVENT_GUEST_SUCCESS:
      return {
        ...state,
        error: null,
        events: {
          ...state.events,
          [action.payload.eventId]: {
            ...state.events[action.payload.eventId],
            guests: {
              ...action.payload.guests
            }
          }
        }
      }
    case EventsActionTypes.CREATE_EVENT_SUCCESS:
      return {
        ...state,
        events: {
          ...state.events,
          [action.payload.eventId]: action.payload.event
        }
      }
    case EventsActionTypes.EDIT_EVENT_SUCCESS:
      return {
        ...state,
        error: null,
        events: {
          ...state.events,
          [action.payload.eventId]: {
            ...state.events[action.payload.eventId],
            ...action.payload.values
          }
        }
      }
    case EventsActionTypes.DELETE_EVENT_SUCCESS:
      const newEvents = Object.keys(state.events).reduce((prev, current) => {
        if (action.payload !== current) {
          prev[current] = state.events[current];
        }
        return prev;
      }, {});

      return {
        ...state,
        events: {
          ...newEvents
        }
      }
    case EventsActionTypes.SET_GUEST_FILTER:
      const newFilter = { ...state.filter };
      const index = newFilter.guestFilter.indexOf(action.payload)
      if (index > -1) {
        newFilter.guestFilter.splice(index, 1);
        if (newFilter.guestFilter.length === 0) {
          newFilter.guestFilter.push("none");
        }
      } else {
        newFilter.guestFilter.push(action.payload);
      }

      return {
        ...state,
        newFilter
      }
    case EventsActionTypes.SET_EVENT_GUEST_FAILED:
    case EventsActionTypes.FETCH_EVENTS_FAILED:
    case EventsActionTypes.DELETE_EVENT_GUEST_FAILED:
    case EventsActionTypes.CREATE_EVENT_FAILED:
    case EventsActionTypes.EDIT_EVENT_FAILED:
    case EventsActionTypes.DELETE_EVENT_FAILED:
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
