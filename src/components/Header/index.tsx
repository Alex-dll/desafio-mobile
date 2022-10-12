import React from 'react';
import { Image } from 'react-native';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Image source={require('../../assets/logo.png')} />
    </Container>
  );
};

export default Header;
