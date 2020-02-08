import { all } from 'redux-saga/effects';

import settings from './settings';
import user from './user';

export default function* rootSaga() {
  return yield all([user, settings]);
}
