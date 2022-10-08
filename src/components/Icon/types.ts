import { ImageProps } from 'react-native';
import { NameIconsTypes } from '../../constants/icons';

export interface IconOptionProps {
  icon: NameIconsTypes;
  size?: number;
  activeColor?: string;
}

export interface IconProps extends ImageProps, IconOptionProps {}
