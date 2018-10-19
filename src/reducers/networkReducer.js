import * as types from '../actions/network';

const initialState = {
  networkIsConnected: false,
};

export default function networkReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHECK_INTERNET_CONNECTION:
      return {
        ...state,
      };
    case types.SET_NETWORK_IS_CONNECTED:
      return {
        ...state,
        networkIsConnected: action.isConnected,
      };
    default:
      return state;
  }
}
