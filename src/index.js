import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '~/config/ReactotronConfig';
import getPersistenceFunctions from '~/config/persistNavigation';
import Routes from '~/routes';
import { store, persistor } from '~/store';
import { colors } from '~/styles';

export default function () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <Routes {...getPersistenceFunctions()} />
      </PersistGate>
    </Provider>
  );
}
