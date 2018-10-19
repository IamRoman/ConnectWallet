import moment from 'moment';
import * as types from '../actions/appSettings';
import { getDifferentTime } from '../services/serviceREST';

const initialState = {
  isShowModal: false,
  startTime: null,
  endTime: null,
  diffTime: null,
};

// const idTimer = setInterval(updateTimer(), 1000);

// const updateTimer = (endTime) => {

//   if (moment(moment()).format('X') <= moment(endTime).format('X')) {
//     return getDifferentTime(moment().format());
//   }
//   return 0;
// };

export default function appSettingsReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_IS_SHOW_MODAL:
      return {
        ...state,
        isShowModal: action.isShowModal,
      };
    case types.CREATE_TIMER:
      return {
        ...state,
        startTime: action.startTime,
        endTime: action.endTime,
        diffTime: 0, // updateTimer(action.endTime),
      };
    case types.CLEAR_TIMER:
      return {
        ...state,
        startTime: null,
        endTime: null,
        diffTime: null,
      };
    default:
      return state;
  }
}
