import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.typography.h1.fontSize}px;
  font-family: ${({ theme }) => theme.typography.h1.fontFamily};
`;
