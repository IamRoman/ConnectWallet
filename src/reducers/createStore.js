import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';

import reducers from './createReducer';
import reduxPersist from '../config/reduxPersist';
import indexSaga from '../sagas/indexSaga';

const persistConfig = reduxPersist.storeConfig;
const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(indexSaga);
  const persistor = persistStore(store);
  return { store, persistor };
}
