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

  export interface ColorType {
    main: string;
  }

  export type ColorsType =
    | 'blue'
    | 'black'
    | 'gray20'
    | 'gray10'
    | 'gray'
    | 'white';

  type PaletteType = {
    blue: ColorType;
    black: ColorType;
    gray20: ColorType;
    gray10: ColorType;
    gray: ColorType;
    white: ColorType;
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
