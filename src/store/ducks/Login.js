import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  setEmail: ['email'],
});

export const INITIAL_STATE = Immutable({
  email: '',
});

export const setEmail = (state, { email }) => state.merge({ email });

export default createReducer(INITIAL_STATE, {
  [Types.SET_EMAIL]: setEmail,
});

export const email = state => state.Login.email;
