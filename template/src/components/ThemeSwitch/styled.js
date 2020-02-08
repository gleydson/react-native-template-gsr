import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { shade } from 'polished';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 5px;
  background-color: ${props => shade(0.3, props.theme.colors.primary)};
  width: 30px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  position: absolute;
  bottom: 100px;
  right: 0;
`;

export const Icon = styled(MaterialIcon).attrs(props => ({
  color: props.theme.colors.switchTheme,
  size: 20,
}))``;
