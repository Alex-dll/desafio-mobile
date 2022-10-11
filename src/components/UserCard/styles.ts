import styled from 'styled-components/native';
import { ImageProps, ImageSourcePropType } from 'react-native';

export const Container = styled.View``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 15px;
  background-color: ${({ theme }) => theme.colors.blue.main};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ElipseView = styled.View`
  padding-right: 14px;
`;

export const Card = styled.View`
  margin-bottom: 1px;
  margin-left: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 15px;
`;

interface CardImageProps extends ImageProps {
  source: ImageSourcePropType;
}

export const CardImage = styled.Image.attrs<CardImageProps>(
  ({ source }) => source,
)`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;

export const BodyCard = styled.View``;

export const RowCard = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 0 16px;
`;