import React from 'react';
import { ITypography } from './types';

import { TextContainer } from './styles';

const Typography: React.FC<ITypography> = ({
  children,
  fontStyle = 'h1',
  color = 'gray20',
  ...rest
}: ITypography) => {
  return (
    <TextContainer color={color} fontStyle={fontStyle} {...rest}>
      {children}
    </TextContainer>
  );
};

export default Typography;
