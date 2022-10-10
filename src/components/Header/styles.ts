import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  padding: 12px 20px;
  height: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black.main};
`;
