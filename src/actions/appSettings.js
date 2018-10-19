export const SET_IS_SHOW_MODAL = 'SET_IS_SHOW_MODAL';
export const CLEAR_TIMER = 'CLEAR_TIMER';
export const CREATE_TIMER = 'CREATE_TIMER';

export const setIsShowModal = isShowModal => ({
  type: SET_IS_SHOW_MODAL,
  isShowModal,
});

export const createTimer = (startTime, endTime) => ({
  type: CREATE_TIMER,
  startTime,
  endTime,
});

export const clearTimer = () => ({
  type: CLEAR_TIMER,
});
