import { call, put, all, select, takeLatest } from 'redux-saga/effects';

import * as ApiService from '~/services/api';
import * as NavigationService from '~/services/navigation';
import {
  Types as UserTypes,
  Creators as UserCreators,
  Selectors as UserSelectors,
} from '~/store/ducks/user';

function* getUser() {
  const username = yield select(UserSelectors.username);
  try {
    const { data } = yield call(ApiService.user, username);
    yield put(UserCreators.getUserSuccess(data));
    NavigationService.navigate('Home');
  } catch (error) {
    yield put(UserCreators.getUserFailure(error));
  }
}

export default all([takeLatest(UserTypes.GET_USER_REQUEST, getUser)]);
