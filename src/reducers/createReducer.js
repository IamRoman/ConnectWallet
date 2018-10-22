import { combineReducers } from 'redux';
import authorizationReducer from './authorizationReducer';
import appSettingsReducer from './appSettingsReducer';
import timerReducer from './timerReducer';

const reducers = {
  auth: authorizationReducer,
  appSettings: appSettingsReducer,
  timer: timerReducer,
};

const appReducer = combineReducers(reducers);
const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
