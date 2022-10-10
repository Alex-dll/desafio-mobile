import React from 'react';
import Header from '../../components/Header';

import Typography from '../../components/Typography';

import { Container, TextContainer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <TextContainer>
        <Typography color="black" fontStyle="h1">
          Funcionários
        </Typography>
      </TextContainer>
    </Container>
  );
};

export default Home;
