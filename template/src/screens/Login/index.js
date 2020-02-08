import React, { useRef } from 'react';
import { Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';

import debounce from 'lodash/debounce';

import loaderCat from '~/assets/lotties/loader-cat.json';
import t from '~/services/i18n';
import { Creators as UserCreators } from '~/store/ducks/user';

import {
  KeyboardSafe,
  KeyboardAvoidingView,
  Container,
  AnimationContainer,
  Animation,
  FormContainer,
  InputTitle,
  Input,
  SubmitButtom,
  TextButton,
} from './styled';

export default function Login() {
  const dispatch = useDispatch();

  const delayedQuery = useRef(
    debounce(value => {
      dispatch(UserCreators.setUsername(value));
    }, 500)
  ).current;

  function handleUsername(value) {
    delayedQuery(value);
  }

  function handleSubmit() {
    Keyboard.dismiss();
    dispatch(UserCreators.getUserRequest());
  }

  return (
    <KeyboardSafe>
      <KeyboardAvoidingView>
        <Container>
          <AnimationContainer>
            <Animation source={loaderCat} autoPlay loop />
          </AnimationContainer>
          <FormContainer>
            <InputTitle>{t('loginLabel')}</InputTitle>
            <Input
              onChangeText={handleUsername}
              placeholder={t('loginPlaceholder')}
              returnKeyType="send"
            />
            <SubmitButtom onPress={handleSubmit}>
              <TextButton>{t('loginButton')}</TextButton>
            </SubmitButtom>
          </FormContainer>
        </Container>
      </KeyboardAvoidingView>
    </KeyboardSafe>
  );
}
