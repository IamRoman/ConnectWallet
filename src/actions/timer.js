export const SET_TIMER_TIME = 'TIMER_SET_TIME';
export const SET_TIMER_START_TIME = 'SET_TIMER_START_TIME';
export const SET_TIMER_BUTTON_IS_ACTIVE = 'SET_TIMER_BUTTON_IS_ACTIVE';
export const START_FIVE_SECONDS_TIMER = 'START_FIVE_SECONDS_TIMER';

export const setTimerTime = value => ({
  type: SET_TIMER_TIME,
  value,
});

export const setTimerSartTime = value => ({
  type: SET_TIMER_START_TIME,
  value,
});

export const setTimerButtonIsActive = value => ({
  type: SET_TIMER_BUTTON_IS_ACTIVE,
  value,
});

export const startFiveSecondsTimer = () => (dispatch) => {
  dispatch(setTimerButtonIsActive(false));
  setTimeout(() => {
    dispatch(setTimerButtonIsActive(true));
  }, 5000);
};
