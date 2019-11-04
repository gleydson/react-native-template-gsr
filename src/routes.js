import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import leftTransition from '~/config/Transitions/left';
import { Login } from '~/screens';

const AppNavigator = createSwitchNavigator(
  {
    Login
  },
  {
    initialRouteName: 'Login',
    transitionConfig: leftTransition,
  },
);

export default createAppContainer(AppNavigator);
