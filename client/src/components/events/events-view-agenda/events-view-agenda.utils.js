import moment from 'moment';

export const getEventDate = date => {
  return date.toDate()
}

export const getMonthString = date => {
  return moment(date.toDate()).format('MMMM');
}