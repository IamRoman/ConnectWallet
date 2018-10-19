import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../reducers/createStore';
import RootContainer from './RootContainer';

const { store, persistor } = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootContainer />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
