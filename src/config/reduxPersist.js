import { AsyncStorage } from 'react-native';

const REDUX_PERSIST = {
  active: false,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    blacklist: ['auth', 'network'],
    whitelist: [],
  },
};

export default REDUX_PERSIST;
