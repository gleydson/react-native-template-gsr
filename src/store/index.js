import AsyncStorage from '@react-native-community/async-storage';
import { createStore, compose, applyMiddleware } from 'redux';
import { SeamLessImmutablePersistenceTransform } from 'redux-immutable-persistence-transform';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';


const persistConfig = {
  key: 'ReactNativeTemplateGSR',
  storage: AsyncStorage,
  transforms: [SeamLessImmutablePersistenceTransform],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [];

// eslint-disable-next-line no-console
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(
    applyMiddleware(...middlewares),
    // eslint-disable-next-line no-console
    console.tron.createEnhancer(),
  )
  : compose(applyMiddleware(...middlewares));

const store = createStore(persistedReducer, composer);
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
