export const FETCHING_LOGIN_USER = 'FETCHING_LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const FETCHING_REGISTRATION_USER = 'FETCHING_REGISTRATION_USER';
export const REGISTRATION_USER_SUCCESS = 'REGISTRATION_USER_SUCCESS';
export const REGISTRATION_USER_FAILURE = 'REGISTRATION_USER_FAILURE';

export const fetchingLoginUser = (email, password, callback) => ({
  type: FETCHING_LOGIN_USER,
  email,
  password,
  callback,
});

export const fetchingRegistrationUser = (email, password, callback) => ({
  type: FETCHING_REGISTRATION_USER,
  email,
  password,
  callback,
});

export const loginUserSuccess = token => ({
  type: LOGIN_USER_SUCCESS,
  token,
});

export const registartionUserSuccess = token => ({
  type: REGISTRATION_USER_SUCCESS,
  token,
});

export const loginUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  errorMessage: error,
});

export const registrationUserFailure = error => ({
  type: REGISTRATION_USER_FAILURE,
  errorMessage: error,
});

