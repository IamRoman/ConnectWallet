import { combineReducers } from 'redux';
import authorizationReducer from './authorizationReducer';
import appSettingsReducer from './appSettingsReducer';

const reducers = {
  auth: authorizationReducer,
  appSettings: appSettingsReducer,
};

const appReducer = combineReducers(reducers);
const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
