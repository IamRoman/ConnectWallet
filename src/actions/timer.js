export const SET_TIMER_TIME = 'TIMER_SET_TIME';
export const SET_TIMER_START_TIME = 'SET_TIMER_START_TIME';
export const SET_TIMER_END_TIME = 'SET_TIMER_END_TIME';
export const SET_TIMER_BUTTON_IS_ACTIVE = 'SET_TIMER_BUTTON_IS_ACTIVE';
export const START_FIVE_SECONDS_TIMER = 'START_FIVE_SECONDS_TIMER';
export const SET_TIMER_IS_VISIBLE = 'SET_TIMER_IS_VISIBLE';

export const setTimerTime = value => ({
  type: SET_TIMER_TIME,
  value,
});

export const setTimerSartTime = value => ({
  type: SET_TIMER_START_TIME,
  value,
});

export const setTimerEndTime = value => ({
  type: SET_TIMER_END_TIME,
  value,
});

export const setTimerButtonIsActive = value => ({
  type: SET_TIMER_BUTTON_IS_ACTIVE,
  value,
});

export const setTimerIsVisible = value => ({
  type: SET_TIMER_IS_VISIBLE,
  value,
});

export const startTimer = () => (dispatch) => {
  dispatch(setTimerButtonIsActive(false));
  const startTime = Date.now();
  const endTime = startTime + (3 * 60 * 1000);
  dispatch(setTimerEndTime(endTime));
  dispatch(setTimerSartTime(startTime));
  setTimeout(() => {
    dispatch(setTimerIsVisible(true));
  }, 5000);
  const interval = setInterval(() => {
    const now = Date.now();
    if (now > endTime + 10) {
      clearInterval(interval);
      dispatch(setTimerIsVisible(false));
      dispatch(setTimerButtonIsActive(true));
    } else {
      dispatch(setTimerTime(now));
    }
  }, 100);
};
