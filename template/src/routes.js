import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { Login, Home } from '~/screens';

const AppNavigator = createSwitchNavigator(
  { Login, Home },
  { initialRouteName: 'Login' }
);

export default createAppContainer(AppNavigator);
