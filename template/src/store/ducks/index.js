import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';

import settings from './settings';
import user from './user';

const resettable = resettableReducer('RESET');

export default combineReducers({
  user: resettable(user),
  settings,
});
