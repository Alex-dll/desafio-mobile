import styled from 'styled-components/native';

export const InputContainer = styled.View`
  margin-bottom: 10px;
`;

export const InputInternal = styled.TextInput`
  flex: 1;
  font-size: ${({ theme }) => theme.typography.h3.fontSize}px;
  font-family: ${({ theme }) => theme.typography.h3.fontFamily};
  color: ${({ theme }) => theme.colors.gray20.main};
  min-height: 48px;
  padding-left: 16px;
`;

interface BorderProps {
  readonly borderColor: string;
}

export const Border = styled.View<BorderProps>`
  background-color: ${({ theme }) => theme.colors.white.main};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  flex-direction: row;
  border-color: ${({ borderColor }) => borderColor};
  border-width: 1px;
`;

export const IconContainer = styled.View`
  padding-right: 16px;
`;
