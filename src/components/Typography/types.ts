import type { TextProps } from 'react-native';
import type { ColorsType, TypographyType } from 'styled-components';

export interface ITypography extends TextProps {
  children: string;
  color?: ColorsType;
  fontStyle?: TypographyType;
}
