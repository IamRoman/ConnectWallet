import { call, put, select } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { path } from 'ramda';
import * as types from '../actions/authorization';
// import { getError } from '../utils/parseErrorData';

export function* fetchLoginUser(api, { email, password, callback }) {
  try {
    const response = yield call(api.loginUser, email, password);
    console.warn('login', response);
  //   if (response.ok) {
  //     if (response.status === 200) {
  //       const token = path(['data', 'token'], response);
  //       yield put({ type: types.LOGIN_USER_SUCCESS, token });
  //     } else {
  //       const data = (path(['data'], response));
  //       const err = getError(data) || localeString('Sorry, something went wrong ...', selectedLanguage);
  //       Alert.alert(null, err);
  //       yield put({ type: types.LOGIN_USER_FAILURE, err });
  //     }
  //   } else if (!response.ok) {
  //     if (response.status === 400) {
  //       const resValidate = yield call(api.loginValidate, phoneNumber, password);
  //       if (resValidate.ok && resValidate.status === 200) {
  //         let data = (path(['data'], resValidate));
  //         const resSend = yield call(api.registrationSend, data.phone_number, data.user_id);
  //         if (resSend.ok && resSend.status === 201) {
  //           Alert.alert(localeString('Sms sent', selectedLanguage));
  //           callback(true, data.user_id);
  //         } else {
  //           data = (path(['data'], resSend));
  //           const err = getError(data) || localeString('Sorry, something went wrong ...', selectedLanguage);
  //           Alert.alert(null, err);
  //           yield put({ type: types.LOGIN_USER_FAILURE, err });
  //         }
  //       } else {
  //         const data = (path(['data'], resValidate));
  //         const err = getError(data) || localeString('Sorry, something went wrong ...', selectedLanguage);
  //         Alert.alert(null, err);
  //         yield put({ type: types.LOGIN_USER_FAILURE, err });
  //       }
  //     } else {
  //       const data = (path(['data'], response));
  //       const err = getError(data) || localeString('Sorry, something went wrong ...', selectedLanguage);
  //       Alert.alert(null, err);
  //       yield put({ type: types.LOGIN_USER_FAILURE, err });
  //     }
  // }
  } catch (error) {
    // const err = error || localeString('Sorry, something went wrong ...', selectedLanguage);
    // Alert.alert(null, err);
    // yield put({ type: types.LOGIN_USER_FAILURE, err });
  }
}


export function* fetchRegistrationUser(api, { email, password }) {
  try {
    const response = yield call(api.registrationUser, email, password);
    console.warn('register', response);
    //   if (response.ok) {
  //     if (response.status === 201) {
  //       let data = path(['data'], response);
  //       const resSend = yield call(api.registrationSend, phoneNumber, data.id);
  //       if (resSend.ok && resSend.status === 201) {
  //         callback(true, null, data.id);
  //         Alert.alert(localeString('Sms sent', selectedLanguage));
  //       } else {
  //         data = (path(['data'], resSend));
  //         const err = getError(data) || localeString('Sorry, something went wrong ...', selectedLanguage);
  //         Alert.alert(null, err);
  //         yield put({ type: types.REGISTRATION_USER_FAILURE, err });
  //       }
  //     } else {
  //       const data = (path(['data'], response));
  //       const err = getError(data) || localeString('Sorry, something went wrong ...', selectedLanguage);
  //       yield put({ type: types.REGISTRATION_USER_FAILURE, err });
  //       callback(false, err, null);
  //     }
  //   } else {
  //     const data = (path(['data'], response));
  //     const err = getError(data) || localeString('Sorry, something went wrong ...', selectedLanguage);
  //     yield put({ type: types.REGISTRATION_USER_FAILURE, err });
  //     callback(false, err, null);
  //   }
  } catch (error) {
  //   const err = error || localeString('Sorry, something went wrong ...', selectedLanguage);
  //   callback(false, err, null);
  //   yield put({ type: types.REGISTRATION_USER_FAILURE, err });
  }
}

