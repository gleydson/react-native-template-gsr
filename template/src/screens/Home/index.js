import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ThemeSwitch from '~/components/ThemeSwitch';
import useTheme from '~/hooks/useTheme';
import t from '~/services/i18n';
import { navigate } from '~/services/navigation';
import { Creators as SettingsCreators } from '~/store/ducks/settings';
import { Selectors as UserSelectors } from '~/store/ducks/user';

import {
  Container,
  Photo,
  Title,
  Subtitle,
  BackButton,
  TextButton,
} from './styled';

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector(UserSelectors.user);

  const { setTheme } = useTheme();

  function goBack() {
    navigate('Login');
    dispatch(SettingsCreators.goBack());
  }

  return (
    <Container>
      <ThemeSwitch onChangeTheme={setTheme} />
      <Photo source={{ uri: user?.avatar_url }} />
      <Title>{`${t('title')} ${user?.name}`}</Title>
      <Subtitle>{t('subtitle')}</Subtitle>
      <BackButton onPress={goBack}>
        <TextButton>{t('backButton')}</TextButton>
      </BackButton>
    </Container>
  );
}
