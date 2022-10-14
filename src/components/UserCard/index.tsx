import React, { memo, useState } from 'react';
import { FlatList, ListRenderItemInfo, TouchableOpacity } from 'react-native';

import Icon from '../Icon';
import Typography from '../Typography';
import { Ellipse } from '../utils/Elipse';
import type { UserCardTypes, UserCardProps } from './types';

import Reanimated, { FadeInUp } from 'react-native-reanimated';

import {
  Container,
  Header,
  HeaderCard,
  ElipseView,
  Card,
  CardImage,
  RowCard,
  FlatListContainer,
  TextContainer,
} from './styles';
import formatPhone from '../../utils/formatPhone';
import formatDate from '../../utils/formatDate';
import { Separator } from '../utils/Separator';
import photos from '../../constants/photos';

const HeaderCardComponent = () => {
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
    </Container>
  );
};

const PeopleCard: React.FC<UserCardTypes> = memo(
  ({ photo, name, office, admissionDate, phoneNumber }: UserCardTypes) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
      <Reanimated.View entering={FadeInUp}>
        <Card>
          <HeaderCard>
            <CardImage source={photos[photo]} />
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
            <Reanimated.View entering={FadeInUp}>
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
                  {formatDate(admissionDate)}
                </Typography>
              </RowCard>
              <RowCard>
                <Typography fontStyle="h2" color="black">
                  Telefone
                </Typography>
                <Typography fontStyle="h3" color="black">
                  {formatPhone(phoneNumber)}
                </Typography>
              </RowCard>
            </Reanimated.View>
          )}
        </Card>
      </Reanimated.View>
    );
  },
);

const UserCard: React.FC<UserCardProps> = ({ users }: UserCardProps) => {
  function renderItem({ item }: ListRenderItemInfo<UserCardTypes>) {
    return <PeopleCard {...item} />;
  }

  return (
    <FlatListContainer>
      <HeaderCardComponent />
      {!!users && (
        <FlatList
          keyExtractor={user => `${user.id}`}
          data={users}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <TextContainer>
              <Typography fontStyle="h2" color="gray20">
                Sem Funcionários
              </Typography>
            </TextContainer>
          }
          ItemSeparatorComponent={Separator}
          renderItem={renderItem}
        />
      )}
    </FlatListContainer>
  );
};

export default UserCard;
