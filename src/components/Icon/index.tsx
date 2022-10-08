import { IconContainer } from './styles';
import { IconProps } from './types';

import Icons from '../../constants/icons';

const Icon: React.FC<Omit<IconProps, 'source'>> = ({
  icon,
  size = 20,
  activeColor,
  style,
}: Omit<IconProps, 'source'>) => {
  if (activeColor) {
    return (
      <IconContainer
        size={size}
        source={Icons[icon]}
        style={[{ tintColor: activeColor }, style]}
      />
    );
  }
  return <IconContainer size={size} source={Icons[icon]} />;
};

export default Icon;
