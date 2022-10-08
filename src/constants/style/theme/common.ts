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
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
  },
};

export const colors: PaletteType = {
  blue: {
    main: Colors.blue,
  },
  black: {
    main: Colors.black,
  },
  gray20: {
    main: Colors.gray20,
  },
  gray10: {
    main: Colors.gray10,
  },
  gray: {
    main: Colors.gray,
  },
  white: {
    main: Colors.white,
  },
};
