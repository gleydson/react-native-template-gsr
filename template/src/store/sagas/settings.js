import { put, all, takeLatest } from 'redux-saga/effects';

import {
  Types as SettingsTypes,
  Creators as SettingsCreators,
} from '~/store/ducks/settings';

function* reset() {
  yield put(SettingsCreators.reset());
}

export default all([takeLatest(SettingsTypes.GO_BACK, reset)]);
