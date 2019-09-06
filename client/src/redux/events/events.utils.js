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

// export const testCall = async (text) => {
//   let rootPath = ''
//   const db = firestore;

//   if (process.env.NODE_ENV === 'production')
//     rootPath = 'production';
//   else if (process.env.NODE_ENV === 'test')
//     rootPath = 'test';
//   else if (process.env.NODE_ENV === 'development')
//     rootPath = 'development';
//   else 
//     rootPath = 'somewhere-over-the-rainbow';
  
//   const newText = text.toUpperCase() + '-' + text.toUpperCase();

//   const newDocRef = db.collection(`${rootPath}/data/text`).doc();
//   let dummData = {
//     id: newDocRef.id,
//     text: newText
//   };

//   try {
//     await newDocRef.set({
//       dummData
//     });
//   } catch (error) {
//     return error;
//   }

//   console.log('Where does this even log to?');  

//   return newText;
// }

// const tester = functions.httpsCallable('testCall');

// export const testCall = async (text) => {
//   const textTest = await tester(text);
//   console.log('tester text: ', textTest);
// }


// export const refresh = async () => {
//   const refreshStore = functions.httpsCallable('refreshStore');
//   const test = await refreshStore(true);
//   console.log('testing refresh: ! ', test);
// }

