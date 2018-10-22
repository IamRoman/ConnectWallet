import { createStackNavigator } from 'react-navigation';

import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';

const AccountStack = createStackNavigator(
  {
    First: { screen: FirstScreen },
    Second: { screen: SecondScreen },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Second',
  },
);

export default AccountStack;
