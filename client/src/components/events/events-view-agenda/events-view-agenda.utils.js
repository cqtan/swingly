import moment from 'moment';
import { getEnvironment } from '../../../firebase/firebase.utils';

export const convertTimestamptoDate = date => {
  if (getEnvironment() === 'production')
    return date.toDate();
  else
    return date;
}

export const getEventDate = date => {
  return convertTimestamptoDate(date)
}

export const getMonthString = date => {
  date = convertTimestamptoDate(date)
  return moment(date).format('MMMM');
}

export const getDayString = date => {
  date = convertTimestamptoDate(date)
  return moment(date).format('ddd');
}

export const getDayNumber = date => {
  date = convertTimestamptoDate(date)
  return moment(date).format('DD');
}

export const getTime = date => {
  date = convertTimestamptoDate(date)
  return moment(date).format('HH:mm');
}

export const checkIsToday = date => {
  date = convertTimestamptoDate(date)
  return moment().isSame(date, 'day');
}
