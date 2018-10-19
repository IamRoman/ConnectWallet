import { combineReducers } from 'redux';
import authorizationReducer from './authorizationReducer';

const reducers = {
  auth: authorizationReducer,
};

const appReducer = combineReducers(reducers);
const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
