import AsyncStorage from '@react-native-community/async-storage';

const persistenceKey = 'persistenceKey';
const persistNavigationState = async (navState) => {
  try {
    await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.tron.log('error retrieving browsing status', err);
  }
};
const loadNavigationState = async () => {
  const jsonString = await AsyncStorage.getItem(persistenceKey);
  return JSON.parse(jsonString);
};

export default function getPersistenceFunctions() {
  return __DEV__ ? {
    persistNavigationState,
    loadNavigationState,
  } : undefined;
}
