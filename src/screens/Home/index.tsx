import React, { useCallback, useEffect, useRef, useState } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import { InputValueRef } from '../../components/Input/types';
import Typography from '../../components/Typography';
import UserCard from '../../components/UserCard';

import { getUsers, Users } from '../../services/usersApi';

import { Container, Wrapper, TextContainer, CardsContainer } from './styles';

const Home: React.FC = () => {
  const refSearch = useRef<InputValueRef>({ value: '' });
  const [users, setUsers] = useState<Users>([] as Users);

  useEffect(() => {
    (async () => {
      const data = await getUsers();
      setUsers(data);
    })();
  }, []);

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

        <CardsContainer>{!!users && <UserCard users={users} />}</CardsContainer>
      </Wrapper>
    </Container>
  );
};

export default Home;
