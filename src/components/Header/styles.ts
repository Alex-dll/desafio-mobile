import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  padding: 12px 20px;
  height: ${({ theme }) => theme.spacing.medium3}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black.main};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
`;
