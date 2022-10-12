import styled from 'styled-components/native';

import type { ITypography } from './types';

type TextContainerProps = Required<Pick<ITypography, 'color' | 'fontStyle'>>;

export const TextContainer = styled.Text<TextContainerProps>`
  color: ${({ theme, color }) => {
    return theme.colors[color].main;
  }};
  font-size: ${({ theme, fontStyle }) => {
    return `${theme.typography[fontStyle].fontSize}px`;
  }};
  font-family: ${({ theme, fontStyle }) => {
    return theme.typography[fontStyle].fontFamily;
  }};
`;
