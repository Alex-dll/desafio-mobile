import React from 'react';
import Header from '../../components/Header';

import Icon from '../../components/Icon';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Icon icon="search" size={17} activeColor="black" />
    </Container>
  );
};

export default Home;
