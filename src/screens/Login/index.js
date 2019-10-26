import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import t from '~/services/i18n';

import { Creators as LoginAction, email } from '~/store/ducks/Login';

import { Container, Text, Input } from './styled';

export default function Login() {
  const dispatch = useDispatch();

  const emailUser = useSelector(email);

  function handleEmail(value) {
    dispatch(LoginAction.setEmail(value));
  }

  return (
    <Container>
      <Text>{t('appName')}</Text>
      <Input keyboardType="email-address" value={emailUser} onChangeText={handleEmail} />
    </Container>
  );
}
