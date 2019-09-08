import moment from 'moment';

export const getEventDate = date => {
  return date.toDate()
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