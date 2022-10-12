import type { ImageProps } from 'react-native';
import type { ColorsType } from 'styled-components';
import type { NameIconsTypes } from '../../constants/icons';

export interface IconOptionProps {
  icon: NameIconsTypes;
  size?: number;
  activeColor?: ColorsType;
}

export interface IconProps extends ImageProps, IconOptionProps {}
