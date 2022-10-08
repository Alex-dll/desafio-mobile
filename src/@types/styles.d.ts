import 'styled-components/';

declare module 'styled-components' {
  export interface Spacing {
    little: number;
    little2: number;
    regular: number;
    regular2: number;
    regular3: number;
    medium: number;
    medium2: number;
    medium3: number;
    medium4: number;
  }

  type PaletteType = {
    blue: string;
    black: string;
    gray20: string;
    gray10: string;
    gray: string;
    white: string;
  };

  export interface TypographyProps {
    fontFamily: string;
    fontSize: number;
  }

  export interface Typography {
    h1: TypographyProps;
    h2: TypographyProps;
    h3: TypographyProps;
  }

  export type TypographyType = 'h1' | 'h2' | 'h3';

  export interface DefaultTheme {
    colors: PaletteType;
    typography: Typography;
    spacing: Spacing;
  }
}
