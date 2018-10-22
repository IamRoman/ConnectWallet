import { Alert } from 'react-native';

// import { getError } from '../utils/parseErrorData';

/*
Constant        VALUE               Status Code   Explanation
----------------------------------------------------------------------------------------
NONE             null               200-299       No problems.
CLIENT_ERROR     'CLIENT_ERROR'     400-499       Any non-specific 400 series error.
SERVER_ERROR     'SERVER_ERROR'     500-599       Any 500 series error.
TIMEOUT_ERROR    'TIMEOUT_ERROR'    ---           Server didn't respond in time.
CONNECTION_ERROR 'CONNECTION_ERROR' ---           Server not available, bad dns.
NETWORK_ERROR    'NETWORK_ERROR'    ---           Network not available.
CANCEL_ERROR     'CANCEL_ERROR'     ---           Request has been cancelled.
*/

const errors = {
  CLIENT_ERROR: 'CLIENT_ERROR',
  SERVER_ERROR: 'SERVER_ERROR',
  TIMEOUT_ERROR: 'TIMEOUT_ERROR',
  CONNECTION_ERROR: 'CONNECTION_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
  CANCEL_ERROR: 'CANCEL_ERROR',
};

const somethingWentWrong = 'Sorry, something went wrong ...';

const networkErrorHandler = ({
  response,
  withoutAlert,
}) => {
  const { problem } = response;
  let errorString;
  if (problem === errors.NETWORK_ERROR) {
    errorString = 'Please check internet connection';
  } else {
    errorString = somethingWentWrong;
  }
  if (!withoutAlert) {
    Alert.alert(null, errorString);
  }
  return errorString;
};

export default networkErrorHandler;
