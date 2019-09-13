import { firestore, dateToTimestamp } from "../../firebase/firebase.utils";
import axios from 'axios';

export const formatMockEvents = eventsObj => {
  const newEventsObj = eventsObj;
  Object.values(newEventsObj).forEach(val => {
      val.start = dateToTimestamp(new Date (val.start));
      val.end = dateToTimestamp(new Date(val.end));
  });

  console.log('new events: ', newEventsObj);
  return newEventsObj;
}

export const eventsToObject = (events) => {
  return events.reduce((prev, event) => {
    prev[event.data().id] = event.data();
    return prev;
  }, {}); 
}

export const scrapeEvents = async (amount) => {
  try {
    const res = await axios.post('/api/data/sample/' + amount);
    console.log('Success!: ', res);
    
  } catch (e) {
    console.log('Failed!: ', e);
  }
}
