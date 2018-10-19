import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

const AccountStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

export default AccountStack;
