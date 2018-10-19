import { call } from 'redux-saga/effects';

export function* fetchLoginUser(api, { email, password }) {
  try {
    const response = yield call(api.loginUser, email, password);
    console.warn('login', response); // In developing
  } catch (error) {
    console.warn('catch', error); // In developing
  }
}


export function* fetchRegistrationUser(api, { email, password }) {
  try {
    const response = yield call(api.registrationUser, email, password);
    console.warn('register', response); // In developing
  } catch (error) {
    console.warn('catch', error); // In developing
  }
}

