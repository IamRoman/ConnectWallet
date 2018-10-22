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

export const startTimer = (duration) => {
  const startTime = moment();
  const endTime = moment(moment()).add(duration, 'seconds');
  let diff = 0;
  let minutes = 0;
  let seconds = 0;
  let interval = null;
  const timer = () => {
    diff = moment(moment(startTime, 'hh:mm:ss').diff(moment(endTime, 'hh:mm:ss'))).format('hh:mm:ss');
    // diff = duration - (((Date.now() - start) / 1000) || 0);

    // minutes = (diff / 60) || 0;
    // seconds = (diff % 60) || 0;

    // minutes = minutes < 10 ? `0${minutes}` : minutes;
    // seconds = seconds < 10 ? `0${seconds}` : seconds;

    console.warn('tick>>>', diff);

    if (diff <= 0) {
      clearInterval(interval);
      return null;
    }
    return `${minutes} : ${seconds}`;
  };
  timer();
  interval = setInterval(timer, 1000);
};


// export const startTimer = (duration) => {
//   const start = Date.now();
//   let diff = 0;
//   let minutes = 0;
//   let seconds = 0;
//   let interval = null;
//   const timer = () => {
//     diff = duration - (((Date.now() - start) / 1000) || 0);

//     minutes = (diff / 60) || 0;
//     seconds = (diff % 60) || 0;

//     minutes = minutes < 10 ? `0${minutes}` : minutes;
//     seconds = seconds < 10 ? `0${seconds}` : seconds;

//     console.warn('tick>>>', `${minutes} : ${seconds}`);

//     if (diff <= 0) {
//       clearInterval(interval);
//       return null;
//     }
//     return `${minutes} : ${seconds}`;
//   };
//   timer();
//   interval = setInterval(timer, 1000);
// };

