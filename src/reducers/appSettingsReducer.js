import * as types from '../actions/appSettings';

const initialState = {
  isShowModal: false,
  messageBannerIsVisible: false,
};

export default function appSettingsReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_IS_SHOW_MODAL:
      return {
        ...state,
        isShowModal: action.isShowModal,
      };
    default:
      return state;
  }
}
