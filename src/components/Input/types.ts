import type { TextInputProps } from 'react-native';
import type { ColorsType } from 'styled-components';
import type { NameIconsTypes } from '../../constants/icons';

export interface InputProps extends TextInputProps {
  icon?: NameIconsTypes;
  iconColor?: ColorsType;
  borderColor?: ColorsType;
}

export interface InputValueRef {
  value: string;
  focus?: () => void;
  blur?: () => void;
  setValue?: (value: string) => void;
}
