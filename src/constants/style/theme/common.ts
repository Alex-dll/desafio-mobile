import { PaletteType, Spacing, Typography } from 'styled-components';
import * as Colors from '../colors';

export const spacing: Spacing = {
  little: 4,
  little2: 8,
  regular: 16,
  regular2: 20,
  regular3: 28,
  medium: 32,
  medium2: 40,
  medium3: 60,
  medium4: 80,
};

export const typographyCommon: Typography = {
  h1: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 24,
  },
  h2: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
  h3: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
};

export const colors: PaletteType = {
  blue: Colors.blue,
  black: Colors.black,
  gray20: Colors.gray20,
  gray10: Colors.gray10,
  gray: Colors.gray,
  white: Colors.white,
};
