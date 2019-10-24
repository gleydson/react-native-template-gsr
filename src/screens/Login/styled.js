import styled from 'styled-components/native';

import { colors, metrics, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
  padding: ${metrics.padding};
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: ${fonts.big};
  color: ${colors.white};
  font-weight: bold;
  margin-bottom: 50px;
`;

export const Input = styled.TextInput.attrs({
  autoCapitalize: 'none',
  autoCorrect: false
})`
  border-radius: ${metrics.borderRadius};
  background-color: ${colors.white};
  width: 100%;
`;
