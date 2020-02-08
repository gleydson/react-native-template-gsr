import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Photo = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fonts.big};
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  margin: 20px 0 10px 0;
`;

export const Subtitle = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fonts.medium};
  text-align: center;
`;

export const BackButton = styled.TouchableOpacity`
  border-radius: ${props => props.theme.metrics.borderRadius};
  background-color: ${props => props.theme.colors.button};
  padding: 15px 30px;
  margin-top: 30px;
`;

export const TextButton = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fonts.medium};
  text-transform: uppercase;
  font-weight: bold;
`;
