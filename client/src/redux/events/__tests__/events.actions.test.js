import {
  fetchEvents
} from '../events.actions';
import {
  firestore
} from '../../../firebase/firebase.utils';
import * as eventsUtils from '../events.utils';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { EventsActionTypes } from '../events.types';

describe('Events Actions', () => {
  const middlwares = [thunk];
  const mockStore = configureStore(middlwares);
  const store = mockStore({});

  afterEach(() => {
    store.clearActions();
    jest.restoreAllMocks();
  });

  describe('fetchEvents', () => {
    let mockEventsSnap = null;
    let mockCollection = null;
    const mockOrderedCollection = { get: () => mockEventsSnap }

    const applyMocks = () => {
      jest.spyOn(firestore, 'collection').mockImplementation(() => mockCollection);
      jest.spyOn(eventsUtils, 'eventsToObject').mockImplementation((events) => events);
    }

    afterEach(() => {
      mockEventsSnap = null;
      mockCollection = null;
    });

    it('FETCH_EVENTS_SUCCESS: should fetch all events from DB', async () => {
      mockEventsSnap = { docs: ['test'] };
      mockCollection = { orderBy: () => mockOrderedCollection };
      applyMocks();
      
      await store.dispatch(fetchEvents());
      
      expect(store.getActions()[1].type).toBe(EventsActionTypes.FETCH_EVENTS_SUCCESS);
    });
  
    it('FETCH_EVENTS_FAILED: should fail on failed to fetch collection snapshot', async () => {
      mockCollection = Error('test: failed to fetch snapshot');
      applyMocks();

      await store.dispatch(fetchEvents());      
      
      expect(store.getActions()[1].type).toBe(EventsActionTypes.FETCH_EVENTS_FAILED);
    });

    it('FETCH_EVENTS_FAILED: should fail if no collection found', async () => {
      mockEventsSnap = { docs: [] };
      mockCollection = { orderBy: () => mockOrderedCollection };
      applyMocks();

      await store.dispatch(fetchEvents());
      
      expect(store.getActions()[1].type).toBe(EventsActionTypes.FETCH_EVENTS_FAILED);
    });

  });

});