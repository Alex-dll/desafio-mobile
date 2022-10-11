import styled from 'styled-components/native';

export const Ellipse = styled.View`
  background-color: ${({ theme }) => theme.colors.white.main};
  border-radius: 50%;
  width: 8px;
  height: 8px;
`;
