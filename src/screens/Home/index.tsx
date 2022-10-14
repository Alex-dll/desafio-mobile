import React, { useEffect, useMemo, useState } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Typography from '../../components/Typography';
import UserCard from '../../components/UserCard';

import { getUsers, Users } from '../../services/usersApi';

import { Container, Wrapper, TextContainer, CardsContainer } from './styles';

const Home: React.FC = () => {
  const [users, setUsers] = useState<Users>([] as Users);

  const [finallyUsers, setFinallyUsers] = useState<Users>([] as Users);
  const [value, setValue] = useState('');

  async function getUsersByFetch() {
    const data = await getUsers();
    setUsers(data);
  }

  const usersFiltered = useMemo(() => {
    const usersFined = users.filter(
      user =>
        user.name.includes(value) ||
        user.office.includes(value) ||
        user.phoneNumber.toString().includes(value),
    );
    return usersFined;
  }, [users, value]);

  useEffect(() => {
    getUsersByFetch();
  }, []);

  useEffect(() => {
    if (!usersFiltered || !value) {
      setFinallyUsers(users);
    } else {
      setFinallyUsers(usersFiltered);
    }
  }, [users, usersFiltered, value]);

  return (
    <Container>
      <Header />
      <Wrapper>
        <TextContainer>
          <Typography color="black" fontStyle="h1">
            Funcionários
          </Typography>
        </TextContainer>

        <Input value={value} onChangeText={setValue} placeholder="Pesquisar" />

        <CardsContainer>
          {!!users && <UserCard users={finallyUsers} />}
        </CardsContainer>
      </Wrapper>
    </Container>
  );
};

export default Home;
