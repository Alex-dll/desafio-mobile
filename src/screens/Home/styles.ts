import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Wrapper = styled.View`
  padding: ${({ theme }) => theme.spacing.regular2}px;
`;

export const TextContainer = styled.View`
  padding: 20px 0 28px;
`;

export const CardsContainer = styled.View`
  margin-top: ${({ theme }) => theme.spacing.regular2}px;
`;
