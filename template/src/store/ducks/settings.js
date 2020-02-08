import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  setTheme: ['theme'],
  reset: null,
  goBack: null,
});

export const INITIAL_STATE = Immutable({
  theme: 'light',
});

export const setTheme = (state = INITIAL_STATE, { theme }) =>
  state.merge({ theme });

export default createReducer(INITIAL_STATE, {
  [Types.SET_THEME]: setTheme,
});

export const Selectors = {
  theme: state => state.settings.theme,
};
