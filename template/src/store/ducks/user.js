import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  setUsername: ['username'],
  getUserRequest: [''],
  getUserSuccess: ['user'],
  getUserFailure: ['error'],
});

export const INITIAL_STATE = Immutable({
  username: '',
  user: {},
});

export const setUsername = (state = INITIAL_STATE, { username }) =>
  state.merge({ username });

export const getUserSuccess = (state = INITIAL_STATE, { user }) =>
  state.merge({ user });

export default createReducer(INITIAL_STATE, {
  [Types.SET_USERNAME]: setUsername,
  [Types.GET_USER_SUCCESS]: getUserSuccess,
});

export const Selectors = {
  username: state => state.user.username,
  user: state => state.user.user,
};
