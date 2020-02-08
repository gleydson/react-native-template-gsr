import { useDispatch, useSelector } from 'react-redux';

import {
  Creators as SettingsCreators,
  Selectors as SettingsSelectors,
} from '~/store/ducks/settings';
import dark from '~/styles/themes/dark';
import light from '~/styles/themes/light';

export default function hooks() {
  const dispatch = useDispatch();

  const theme = useSelector(SettingsSelectors.theme);

  function setTheme() {
    dispatch(
      SettingsCreators.setTheme(
        theme === light.title ? dark.title : light.title
      )
    );
  }

  function getCurrentTheme() {
    return theme === light.title ? light : dark;
  }

  return { setTheme, getCurrentTheme };
}
