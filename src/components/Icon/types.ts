import { ImageProps } from 'react-native';
import { ColorsType } from 'styled-components';
import { NameIconsTypes } from '../../constants/icons';

export interface IconOptionProps {
  icon: NameIconsTypes;
  size?: number;
  activeColor?: ColorsType;
}

export interface IconProps extends ImageProps, IconOptionProps {}
