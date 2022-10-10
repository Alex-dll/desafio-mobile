import React, { useRef } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { InputValueRef } from '../../components/Input/types';

import Typography from '../../components/Typography';

import { Container, Wrapper, TextContainer } from './styles';

const Home: React.FC = () => {
  const refSearch = useRef<InputValueRef>({ value: '' });

  return (
    <Container>
      <Header />
      <Wrapper>
        <TextContainer>
          <Typography color="black" fontStyle="h1">
            Funcionários
          </Typography>
        </TextContainer>

        <Input ref={refSearch} placeholder="Pesquisar" />
      </Wrapper>
    </Container>
  );
};

export default Home;
