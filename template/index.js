import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';

import { PersistGate } from 'redux-persist/integration/react';

import '~/config/reactotron_config';
import { store, persistor } from '~/store';

import { name as appName } from './app.json';
import App from './src';

function RNTemplateGSR() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => RNTemplateGSR);
