import { TextInputProps } from 'react-native';
import { ColorsType } from 'styled-components';
import { NameIconsTypes } from '../../constants/icons';

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
