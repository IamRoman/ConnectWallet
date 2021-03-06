import * as types from '../actions/timer';

const initialState = {
  timerValue: null,
  startValue: null,
  endValue: null,
  timerButtonIsActive: false,
  timerIsVisible: false,
};

export default function timerReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_TIMER_BUTTON_IS_ACTIVE:
      return {
        ...state,
        timerButtonIsActive: action.value,
      };
    case types.SET_TIMER_START_TIME:
      return {
        ...state,
        startValue: action.value,
      };
    case types.SET_TIMER_END_TIME:
      return {
        ...state,
        endValue: action.value,
      };
    case types.SET_TIMER_TIME:
      return {
        ...state,
        timerValue: action.value,
      };
    case types.SET_TIMER_IS_VISIBLE:
      return {
        ...state,
        timerIsVisible: action.value,
      };
    default:
      return state;
  }
}
