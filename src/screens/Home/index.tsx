import React, { useRef } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { InputValueRef } from '../../components/Input/types';

import Typography from '../../components/Typography';
import UserCard from '../../components/UserCard';

import { Container, Wrapper, TextContainer, CardsContainer } from './styles';

const Home: React.FC = () => {
  const refSearch = useRef<InputValueRef>({ value: '' });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header />
        <Wrapper>
          <TextContainer>
            <Typography color="black" fontStyle="h1">
              Funcionários
            </Typography>
          </TextContainer>

          <Input ref={refSearch} placeholder="Pesquisar" />

          <CardsContainer>
            <UserCard />
          </CardsContainer>
        </Wrapper>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Home;
