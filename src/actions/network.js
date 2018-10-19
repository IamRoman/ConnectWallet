export const CHECK_INTERNET_CONNECTION = 'CHECK_INTERNET_CONNECTION';
export const SET_NETWORK_IS_CONNECTED = 'SET_NETWORK_IS_CONNECTED';

export const checkInternetConnection = callback => ({
  type: CHECK_INTERNET_CONNECTION,
  callback,
});

export const setNetworkIsConnected = isConnected => ({
  type: SET_NETWORK_IS_CONNECTED,
  isConnected,
});
