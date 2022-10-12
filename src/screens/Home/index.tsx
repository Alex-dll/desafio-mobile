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
  const [usersFiltered, setUsersFiltered] = useState<Users | undefined>(
    undefined,
  );
  const [finallyUsers, setFinallyUsers] = useState<Users>([] as Users);

  async function getUsersByFetch() {
    const data = await getUsers();
    setUsers(data);
  }

  const handleChangeUsersFiltered = useCallback(() => {
    const usersFined = users.filter(
      user =>
        user.name.includes(refSearch.current.value) ||
        user.office.includes(refSearch.current.value) ||
        user.phoneNumber.toString().includes(refSearch.current.value),
    );

    setUsersFiltered(usersFined);
  }, [users]);

  useEffect(() => {
    getUsersByFetch();
  }, []);

  useEffect(() => {
    if (!usersFiltered || !refSearch.current.value) {
      setFinallyUsers(users);
    } else {
      setFinallyUsers(usersFiltered);
    }
  }, [users, usersFiltered]);

  return (
    <Container>
      <Header />
      <Wrapper>
        <TextContainer>
          <Typography color="black" fontStyle="h1">
            Funcionários
          </Typography>
        </TextContainer>

        <Input
          ref={refSearch}
          placeholder="Pesquisar"
          onChangeText={handleChangeUsersFiltered}
        />

        <CardsContainer>
          {!!users && <UserCard users={finallyUsers} />}
        </CardsContainer>
      </Wrapper>
    </Container>
  );
};

export default Home;
