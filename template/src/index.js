import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';

import './config/reactotron_config';
import getPersistenceFunctions from './config/persist_navigation';
import useTheme from './hooks/useTheme';
import Routes from './routes';
import { setTopLevelNavigator } from './services/navigation';

export default function App() {
  const { getCurrentTheme } = useTheme();
  const primaryColor = getCurrentTheme().colors.primary;

  return (
    <ThemeProvider theme={getCurrentTheme()}>
      <StatusBar backgroundColor={primaryColor} barStyle="light-content" />
      <Routes {...getPersistenceFunctions()} ref={setTopLevelNavigator} />
    </ThemeProvider>
  );
}
