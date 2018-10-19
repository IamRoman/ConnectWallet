import moment from 'moment';

export const getDifferentTime = (startTime, endTime) => {
  if (startTime && endTime) {
    if (startTime <= endTime) {
      return moment(moment(startTime, 'hh:mm').diff(moment(endTime, 'hh:mm'))).format('hh:mm');
    }
    console.warn('stop timer');
    return 0;
  }
  console.warn('data is empty');
  return 0;
};

