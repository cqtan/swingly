import {
  fetchEvents,
  setEventGuest,
  deleteEventGuest
} from '../events.actions';
import {
  firestore
} from '../../../firebase/firebase.utils';
import * as firebaseUtils from "../../../firebase/firebase.utils";
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
    let mockGetEnvironment = firebaseUtils.getEnvironment();
    const mockOrderedCollection = { get: () => mockEventsSnap }

    const applyMocks = () => {
      jest.spyOn(firestore, 'collection').mockImplementation(() => mockCollection);
      jest.spyOn(eventsUtils, 'eventsToObject').mockImplementation((events) => events);
      jest.spyOn(firebaseUtils, "getEnvironment").mockImplementation(() => mockGetEnvironment);
    }

    afterEach(() => {
      mockEventsSnap = null;
      mockCollection = null;
      mockGetEnvironment = firebaseUtils.getEnvironment();
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

    it("FETCH_EVENTS_FAILED: should fail if environment is not set", async () => {
      mockGetEnvironment = null;
      applyMocks();

      await store.dispatch(fetchEvents());

      expect(store.getActions()[0].type).toBe(EventsActionTypes.EVENTS_IS_LOADING);
      expect(store.getActions()[1].type).toBe(EventsActionTypes.FETCH_EVENTS_FAILED);
    });
  });

  describe("setEventGuest", () => {
    let mockEventRef = null;

    const applyMocks = () => {
      jest.spyOn(firestore, "doc").mockImplementation(() => mockEventRef);
    }

    afterEach(() => {
      mockEventRef = null;
    });

    it("SET_EVENT_GUEST_FAILED: should fail when update method throws an error", async () => {
      mockEventRef = { update: () => { throw Error("error_message") }};
      applyMocks();

      await store.dispatch(setEventGuest("user_id", { id: "event_id" }, "guestType"));

      expect(store.getActions()[0].type).toBe(EventsActionTypes.SET_EVENT_GUEST_FAILED);
    });

    it("SET_EVENT_GUEST_SUCCESS: should succeed when update method of does not throw an error", async () => {
      mockEventRef = { update: () => null };
      applyMocks();

      await store.dispatch(setEventGuest("user_id", { id: "event_id" }, "guestType"));

      expect(store.getActions()[0].type).toBe(EventsActionTypes.SET_EVENT_GUEST_SUCCESS);
    });

    it("SET_EVENT_GUEST_SUCCESS: should succeed if the expected guests variable is passed as payload", async () => {
      mockEventRef = { update: () => null };
      const mockUserId = "guest3";
      const mockEvent = {
        id: "event_id",
        guests: {
          guest1: "interested",
          guest2: "interested"
        }
      };
      const mockGuestType = "going";
      const mockExpected = {
        eventId: "event_id",
        guests: {
          ...mockEvent.guests,
          [mockUserId]: mockGuestType
        }
      }
      applyMocks();

      await store.dispatch(setEventGuest(mockUserId, mockEvent, mockGuestType));

      expect(store.getActions()[0].type).toBe(EventsActionTypes.SET_EVENT_GUEST_SUCCESS);
      expect(store.getActions()[0].payload).toEqual(mockExpected);
    });
  });

  describe("deleteEventGuest", () => {
    let mockEventRef = null;

    const applyMocks = () => {
      jest.spyOn(firestore, "doc").mockImplementation(() => mockEventRef);
    }

    afterEach(() => {
      mockEventRef = null;
    });

    it("DELETE_EVENT_GUEST_FAILED: should fail when update method throws an error", async () => {
      mockEventRef = { update: () => { throw Error("error_message") } };
      applyMocks();

      await store.dispatch(deleteEventGuest("user_id", { id: "event_id" }));

      expect(store.getActions()[0].type).toBe(EventsActionTypes.DELETE_EVENT_GUEST_FAILED);
    });

    it("DELETE_EVENT_GUEST_SUCCESS: should succeed when update method of does not throw an error", async () => {
      mockEventRef = { update: () => null };
      applyMocks();

      await store.dispatch(deleteEventGuest("user_id", { id: "event_id" }));

      expect(store.getActions()[0].type).toBe(EventsActionTypes.DELETE_EVENT_GUEST_SUCCESS);
    });

    it("DELETE_EVENT_GUEST_SUCCESS: should succeed if the expected guests variable is passed as payload", async () => {
      mockEventRef = { update: () => null };
      const mockUserId = "guest1";
      const mockEvent = {
        id: "event_id",
        guests: {
          guest1: "interested",
          guest2: "interested"
        }
      };
      const mockExpected = {
        eventId: "event_id",
        guests: {
          ...mockEvent.guests,
        }
      }
      delete mockExpected.guests[mockUserId];
      applyMocks();

      await store.dispatch(deleteEventGuest(mockUserId, mockEvent));

      expect(store.getActions()[0].type).toBe(EventsActionTypes.DELETE_EVENT_GUEST_SUCCESS);
      expect(store.getActions()[0].payload).toEqual(mockExpected);
    });
  });

});