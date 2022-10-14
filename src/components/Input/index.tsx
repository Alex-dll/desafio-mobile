import type { InputProps } from './types';

import { InputContainer, Border, InputInternal, IconContainer } from './styles';
import { colors } from '../../constants/style/theme/common';

import Icon from '../Icon';

const Input = ({
  value,
  onChangeText,
  borderColor = 'gray10',
  ...rest
}: InputProps) => {
  return (
    <InputContainer>
      <Border color="transparent" borderColor={colors[borderColor].main}>
        <InputInternal
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={colors.gray20.main}
          {...rest}
        />
        <IconContainer>
          <Icon icon="search" activeColor="gray10" size={24} />
        </IconContainer>
      </Border>
    </InputContainer>
  );
};

export default Input;
