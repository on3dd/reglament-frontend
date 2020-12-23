import React, { PropsWithChildren, HTMLProps } from 'react';
import styled from 'styled-components';

import { PropsWithTheme } from '@reglament';

import { lowercase } from '../mixins';

import { useThemeContext } from '../../../utils/contexts/ThemeContext';

type BaseButtonProps = PropsWithChildren<
  HTMLProps<HTMLButtonElement> & {}
>;

type ButtonProps = PropsWithTheme<{}>;

const Button = styled.button`
  ${lowercase}

  border: none;
  border-radius: 4px;

  color: ${({ theme }: ButtonProps) => theme.fontColorNeg};
  background-color: ${({ theme }: ButtonProps) => theme.buttonColor};
`;

const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  className,
}: BaseButtonProps) => {
  const { theme } = useThemeContext();

  return (
    <Button theme={theme} className={className}>
      {children}
    </Button>
  );
};

export default BaseButton;
