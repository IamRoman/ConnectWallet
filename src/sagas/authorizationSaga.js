import { call, put } from 'redux-saga/effects';
import { path } from 'ramda';
import * as types from '../actions/authorization';
import networkErrorHandler from '../utils/networkErrorHandler';
import errorHandler from '../utils/errorHandler';

export function* fetchLoginUser(api, { email, password, callback }) {
  try {
    const response = yield call(api.loginUser, email, password);
    console.log('!!!resp', response);
    if (response.ok && response.status === 200) {
      const token = path(['data', 'token'], response);
      yield put({ type: types.LOGIN_USER_SUCCESS, token });
      callback(null);
    } else if (!response.ok) {
      const err = networkErrorHandler({ response, withoutAlert: true });
      yield put({ type: types.LOGIN_USER_FAILURE, err });
      callback(err);
    }
  } catch (error) {
    const err = errorHandler({ error });
    yield put({ type: types.LOGIN_USER_FAILURE, err });
    callback(err);
  }
}


export function* fetchRegistrationUser(api, { email, password, callback }) {
  try {
    const response = yield call(api.registrationUser, email, password);
    if (response.ok && response.status === 201) {
      const token = path(['data', 'token'], response);
      yield put({ type: types.REGISTRATION_USER_SUCCESS, token });
      callback(null);
    } else if (!response.ok) {
      const err = networkErrorHandler({ response, withoutAlert: true });
      yield put({ type: types.REGISTRATION_USER_FAILURE, err });
      callback(err);
    }
  } catch (error) {
    const err = errorHandler({ error });
    yield put({ type: types.REGISTRATION_USER_FAILURE, err });
    callback(err);
  }
}

