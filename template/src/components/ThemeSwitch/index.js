import React from 'react';

import PropTypes from 'prop-types';

import { Container, Icon } from './styled';

export default function ThemeSwitch({ onChangeTheme }) {
  return (
    <Container onPress={onChangeTheme}>
      <Icon name="sync" />
    </Container>
  );
}

ThemeSwitch.propTypes = {
  onChangeTheme: PropTypes.func.isRequired,
};
