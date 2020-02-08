import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  padding: '20px',
  widthScreen: width,
  heightScreen: height,
  borderRadius: '5px',
};
