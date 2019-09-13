import moment from 'moment';

export const convertTimestampToDate = date => {
  return date.toDate();
}

export const getEventDate = date => {
  return convertTimestampToDate(date)
}

export const getMonthString = date => {
  date = convertTimestampToDate(date)
  return moment(date).format('MMMM');
}

export const getDayString = date => {
  date = convertTimestampToDate(date)
  return moment(date).format('ddd');
}

export const getDayNumber = date => {
  date = convertTimestampToDate(date)
  return moment(date).format('DD');
}

export const getTime = date => {
  date = convertTimestampToDate(date)
  return moment(date).format('HH:mm');
}

export const checkIsToday = date => {
  date = convertTimestampToDate(date)
  return moment().isSame(date, 'day');
}
