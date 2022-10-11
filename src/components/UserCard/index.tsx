import React, { useState } from 'react';
import Icon from '../Icon';
import Typography from '../Typography';
import { Ellipse } from '../utils/Elipse';
import type { UserCardProps } from './types';

import {
  Container,
  Header,
  HeaderCard,
  ElipseView,
  Card,
  CardImage,
  BodyCard,
  RowCard,
} from './styles';
import { TouchableOpacity } from 'react-native';
import formatPhone from '../../utils/formatPhone';
import formatDate from '../../utils/formatDate';

console.log(new Date());

const PeopleCard: React.FC<UserCardProps> = ({
  imageSrc,
  name,
  office,
  admissionDate,
  phoneNumber,
}: UserCardProps) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Card>
      <HeaderCard>
        <CardImage source={{ uri: imageSrc }} />
        <Typography fontStyle="h2" color="black">
          {name}
        </Typography>
        <TouchableOpacity onPress={() => setIsOpened(prev => !prev)}>
          <Icon
            icon={isOpened ? 'chevronUp' : 'chevronDown'}
            activeColor="blue"
            size={32}
          />
        </TouchableOpacity>
      </HeaderCard>
      {isOpened && (
        <BodyCard>
          <RowCard>
            <Typography fontStyle="h2" color="black">
              Cargo
            </Typography>
            <Typography fontStyle="h3" color="black">
              {office}
            </Typography>
          </RowCard>
          <RowCard>
            <Typography fontStyle="h2" color="black">
              Data de admissão
            </Typography>
            <Typography fontStyle="h3" color="black">
              {`${admissionDate}`}
            </Typography>
          </RowCard>
          <RowCard>
            <Typography fontStyle="h2" color="black">
              Telefone
            </Typography>
            <Typography fontStyle="h3" color="black">
              {`${phoneNumber}`}
            </Typography>
          </RowCard>
        </BodyCard>
      )}
    </Card>
  );
};

const UserCard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Typography fontStyle="h2" color="white">
          FOTO
        </Typography>
        <Typography fontStyle="h2" color="white">
          NOME
        </Typography>
        <ElipseView>
          <Ellipse />
        </ElipseView>
      </Header>

      <PeopleCard
        name="Giovana L. Arruda"
        imageSrc="https://reactjs.org/logo-og.png"
        office="Front-end"
        admissionDate={formatDate(new Date())}
        phoneNumber={formatPhone(5561994170022)}
      />
      <PeopleCard
        name="Giovana L. Arruda"
        imageSrc="https://reactjs.org/logo-og.png"
        office="Front-end"
        admissionDate={formatDate(new Date())}
        phoneNumber={formatPhone(5561994170022)}
      />
      <PeopleCard
        name="Giovana L. Arruda"
        imageSrc="https://reactjs.org/logo-og.png"
        office="Front-end"
        admissionDate={formatDate(new Date())}
        phoneNumber={formatPhone(5561994170022)}
      />
      <PeopleCard
        name="Giovana L. Arruda"
        imageSrc="https://reactjs.org/logo-og.png"
        office="Front-end"
        admissionDate={formatDate(new Date())}
        phoneNumber={formatPhone(5561994170022)}
      />
    </Container>
  );
};

export default UserCard;
