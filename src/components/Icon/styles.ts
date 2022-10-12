import styled from 'styled-components/native';

import type { IconProps } from './types';

type ImageProps = Required<Pick<IconProps, 'size'>>;

export const IconContainer = styled.Image<ImageProps>`
  min-width: ${({ size }) => size}px;
  min-height: ${({ size }) => size}px;
  max-width: ${({ size }) => size}px;
  max-height: ${({ size }) => size}px;
`;
