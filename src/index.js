import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '~/config/ReactotronConfig';
import getPersistenceFunctions from '~/config/PersistNavigation';
import Routes from '~/routes';
import NavigatorService from '~/services/navigation';
import { store, persistor } from '~/store';
import { colors } from '~/styles';

export default function () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <Routes
          {...getPersistenceFunctions()}
          ref={navigatorRef => NavigatorService.setNavigator(navigatorRef)}
        />
      </PersistGate>
    </Provider>
  );
}
