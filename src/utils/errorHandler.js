import { Alert } from 'react-native';

const somethingWentWrong = 'Sorry, something went wrong ...';

const errorHandler = ({
  error,
  withoutAlert,
}) => {
  console.warn('errorHandler got error: ', error);
  if (!withoutAlert) {
    Alert.alert(null, somethingWentWrong);
  }
  return somethingWentWrong;
};

export default errorHandler;
