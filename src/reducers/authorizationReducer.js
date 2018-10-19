import * as types from '../actions/authorization';

const initialState = {
  token: null,
  isFetchingLogin: false,
  isFetchingRegistration: false,
  loginError: null,
  registrationError: null,
};

export default function authorizationReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCHING_LOGIN_USER:
      return {
        ...state,
        isFetchingLogin: true,
      };
    case types.FETCHING_REGISTRATION_USER:
      return {
        ...state,
        isFetchingRegistration: true,
      };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isFetchingLogin: false,
        token: action.token,
        loginError: null,
      };
    case types.REGISTRATION_USER_SUCCESS:
      return {
        ...state,
        token: action.token,
        isFetchingRegistration: false,
        registrationError: null,
      };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        isFetchingLogin: false,
        loginError: action.error,
      };
    case types.REGISTRATION_USER_FAILURE:
      return {
        ...state,
        isFetchingRegistration: false,
        registrationError: action.error,
      };
    case types.LOGOUT_USER:
      return {
        initialState,
      };
    default:
      return state;
  }
}
