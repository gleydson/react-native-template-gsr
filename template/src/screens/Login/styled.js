import { Keyboard, Platform, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

export const KeyboardSafe = styled.TouchableWithoutFeedback.attrs({
  onPress: Keyboard.dismiss,
  enabled: Platform.OS === 'ios',
})``;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : null,
})`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.primary};
  justify-content: center;
`;

export const AnimationContainer = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

export const Animation = styled(LottieView)``;

export const FormContainer = styled.View`
  flex: 2;
  padding: 0 ${props => props.theme.metrics.padding};
`;

export const Text = styled.Text`
  font-size: ${props => props.theme.fonts.big};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  margin-bottom: 50px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const InputTitle = styled.Text`
  color: ${props => props.theme.colors.lighter};
  font-weight: bold;
  text-transform: uppercase;
`;

export const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.colors.transparent,
  autoCapitalize: 'none',
  autoCorrect: false,
  selectionColor: props.theme.colors.white,
}))`
  height: 48px;
  font-size: 17px;
  color: #fff;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${props => props.theme.colors.transparent};
`;

export const SubmitButtom = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.button};
  border-radius: ${props => props.theme.metrics.borderRadius};
  width: 100%;
  height: 50px;
  padding: 3px 5px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fonts.medium};
  text-transform: uppercase;
  font-weight: bold;
`;
