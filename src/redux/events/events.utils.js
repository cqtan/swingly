import { firestore, getRootPath } from "../../firebase/firebase.utils";
import mockEvents from '../dummy-data/dummy-event-data';

export const deleteAllTestEventsInDb = async () => {
  const eventsSnap = await firestore.collection(`test/data/events`).get();

  if (eventsSnap.exists) {
    eventsSnap.forEach(doc => {
      doc.delete();
    });
  }
};

export const createMockEventsInDb = async (copies, hostObj) => {
  const dummyEventsRef = firestore.collection(`${getRootPath()}/data/events`);
  let mockEvent = mockEvents.events.id;
  mockEvent.host = hostObj;

  for (let i = 0; i < copies; i++) {
    const newDocRef = dummyEventsRef.doc();
    mockEvent.id = newDocRef.id;

    try {
      await newDocRef.set(mockEvent);
    } catch (error) {
      console.log('Add Mock Events Error!: ', error);
    }
  }
} 

export const eventsToObject = (events) => {
  return events.reduce((prev, event) => {
    prev[event.data().id] = event.data();
    return prev;
  }, {}); 
}
