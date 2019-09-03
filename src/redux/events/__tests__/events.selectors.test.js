import {
  selectAllEvents,
  selectEventsAreLoading
} from '../events.selectors';

describe('Events Selectors', () => {
  const mockState = {
    events: {
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
      error: null
    }
  }

  describe('selectAllEvents', () => {
    it('should return the events object', () => {
      expect(selectAllEvents(mockState)).toEqual(mockState.events.events);
    });

    it('should return the isLoading value', () => {
      expect(selectEventsAreLoading(mockState)).toEqual(mockState.events.isLoading);
    });
  });
});