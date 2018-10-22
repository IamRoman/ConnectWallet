import * as types from '../actions/appSettings';

const initialState = {
  isShowModal: false,
  startTime: null,
  endTime: null,
  diffTime: null,
  messageBannerIsVisible: false,
};

export default function appSettingsReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_IS_SHOW_MODAL:
      return {
        ...state,
        isShowModal: action.isShowModal,
      };
    case types.TRIGGER_MESSAGE_BANNER:
      return {
        ...state,
        messageBannerIsVisible: action.IsVisible,
      };
    case types.CREATE_TIMER:
      return {
        ...state,
        startTime: action.startTime,
        endTime: action.endTime,
        diffTime: 0,
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
