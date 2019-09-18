import { EventsActionTypes } from '../events.types';
import eventsReducer from '../events.reducer';

describe('Events Reducer', () => {
  const initialState = {
    events: {},
    isLoading: false,
    filterType: 'none',
    error: null
  };

  const mockState = {
    events: {
      aaa: {
        id: 'aaa',
        title: 'event1',
        location: 'test_location1'
      },
      bbb: {
        id: 'bbb',
        title: 'event2',
        location: 'test_location2'
      },
      ccc: {
        id: 'ccc',
        title: 'event3',
        location: 'test_location3'
      }
    },
    isLoading: false,
    filterType: 'none',
    error: null
  }

  describe('should return the initial state', () => {
    it('Default', () => {
      expect(eventsReducer(undefined, {})).toEqual(initialState);
    });
  });

  describe('should append all events to the events object', () => {
    it('FETCH_EVENTS_SUCCESS', () => {
      const mockAction = {
        type: EventsActionTypes.FETCH_EVENTS_SUCCESS,
        payload: mockState.events
      }

      expect(eventsReducer(initialState, mockAction)).toEqual(mockState);
    });
  });

  describe('should return the current state and append an error', () => {
    it('FETCH_EVENTS_FAILED', () => {
      const mockAction = {
        type: EventsActionTypes.FETCH_EVENTS_FAILED,
        payload: 'error!'
      };
  
      const mockExpected = {
        ...mockState,
        error: mockAction.payload
      };
  
      expect(eventsReducer(mockState, mockAction)).toEqual(mockExpected);
    });
  });
});
