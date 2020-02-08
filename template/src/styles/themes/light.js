import defaultColors from '../defaultColors';
import defaultFonts from '../defaultFonts';
import defaultMetrics from '../defaultMetrics';

export default {
  title: 'light',

  colors: {
    primary: '#3498db',
    secondary: '#2980b9',

    button: '#2980b9',

    switchTheme: '#fff',

    ...defaultColors,
  },
  fonts: { ...defaultFonts },
  metrics: { ...defaultMetrics },
};
