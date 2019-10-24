import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import leftTransition from '~/config/transitions/left';
import { Login } from '~/screens';

const MainNavigator = createSwitchNavigator(
  {
    Login,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
    transitionConfig: () => leftTransition(),
    transparentCard: true,
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(AppNavigator);
