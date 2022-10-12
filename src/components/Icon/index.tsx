import React from 'react';

import type { IconProps } from './types';

import Icons from '../../constants/icons';
import { colors } from '../../constants/style/theme/common';

import { IconContainer } from './styles';

const Icon: React.FC<Omit<IconProps, 'source'>> = ({
  icon,
  size = 20,
  activeColor = 'gray10',
  style,
}: Omit<IconProps, 'source'>) => {
  if (activeColor) {
    return (
      <IconContainer
        size={size}
        source={Icons[icon]}
        style={[{ tintColor: colors[activeColor].main }, style]}
      />
    );
  }
  return <IconContainer size={size} source={Icons[icon]} />;
};

export default Icon;
