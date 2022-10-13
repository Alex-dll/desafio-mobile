import type { SetStateAction } from 'react';
import type { TextInputProps } from 'react-native';
import type { ColorsType } from 'styled-components';
import type { NameIconsTypes } from '../../constants/icons';

export interface InputProps extends TextInputProps {
  value: string;
  onChangeText: (value: SetStateAction<string>) => void;
  icon?: NameIconsTypes;
  iconColor?: ColorsType;
  borderColor?: ColorsType;
}
