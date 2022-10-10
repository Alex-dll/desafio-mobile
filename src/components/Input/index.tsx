import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { InputProps, InputValueRef } from './types';

import { InputContainer, Border, InputInternal, IconContainer } from './styles';
import { colors } from '../../constants/style/theme/common';
import Icon from '../Icon';

const Input: React.ForwardRefRenderFunction<InputValueRef, InputProps> = (
  { onChangeText, borderColor = 'gray10', ...rest },
  ref,
) => {
  const [text, setText] = useState('');

  const internalRef = useRef<any>();

  useImperativeHandle(
    ref,
    () => ({
      value: text,
      focus: () => internalRef.current?.focus?.(),
      blur: () => internalRef.current?.blur?.(),
      setValue: (value: string) => setText(value),
    }),
    [text],
  );

  return (
    <InputContainer>
      <Border color="transparent" borderColor={colors[borderColor].main}>
        <InputInternal
          ref={internalRef}
          value={text}
          onChangeText={(value: string) => {
            setText(value);
            onChangeText?.(value);
          }}
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

export default forwardRef(Input);
