import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white.main};
  align-items: center;
  justify-content: center;
  ${Platform.select({
    android: css`
      padding-top: 30px;
    `,
  })}
`;
