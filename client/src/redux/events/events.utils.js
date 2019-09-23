import moment from 'moment';
import axios from 'axios';
import { dateToTimestamp } from "../../firebase/firebase.utils";

export const formatMockEvents = eventsObj => {
  const newEventsObj = eventsObj;
  Object.values(newEventsObj).forEach(val => {
      val.start = dateToTimestamp(new Date (val.start));
      val.end = dateToTimestamp(new Date(val.end));
  });

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

export const getMonthString = date => {
  return moment(date.toDate()).format('MMMM');
}

export const getDayString = date => {
  return moment(date.toDate()).format('ddd');
}

export const getDayNumber = date => {
  return moment(date.toDate()).format('DD');
}

export const getTime = date => {
  return moment(date.toDate()).format('HH:mm');
}

export const checkIsToday = date => {
  return moment().isSame(date.toDate(), 'day');
}
