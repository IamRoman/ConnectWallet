import { takeEvery } from 'redux-saga/effects';
import API from '../services/serviceREST';
import FixtureAPI from '../services/fixtureApi';
import DebugConfig from '../config/debugConfig';

/* ------------- Types ------------- */
import {
  FETCHING_LOGIN_USER,
  FETCHING_REGISTRATION_USER,
} from '../actions/authorization';

/* ------------- Sagas ------------- */

import {
  fetchLoginUser,
  fetchRegistrationUser,
} from './authorizationSaga';

const api = DebugConfig.useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Types To Sagas ------------- */
function* rootSaga() {
  // ------------------ Authorization ------------- //
  yield takeEvery(FETCHING_LOGIN_USER, fetchLoginUser, api);
  yield takeEvery(FETCHING_REGISTRATION_USER, fetchRegistrationUser, api);
}

export default rootSaga;
