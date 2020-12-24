import React, { PropsWithChildren, HTMLProps } from 'react';
import styled from 'styled-components';

import { PropsWithTheme } from '@reglament';

import { lowercase, pointer } from '../mixins';

import { useThemeContext } from '../../../utils/contexts/ThemeContext';

type BaseButtonProps = PropsWithChildren<
  HTMLProps<HTMLButtonElement> & {}
>;

type ButtonProps = PropsWithTheme<{}>;

const Button = styled.button`
  ${pointer}
  ${lowercase}

  border: none;
  border-radius: 4px;
  color: ${({ theme }: ButtonProps) => theme.fontColorNeg};
  background-color: ${({ theme }: ButtonProps) => theme.buttonColor};

  &:disabled {
    cursor: not-allowed;

    color: ${({ theme }: ButtonProps) => theme.fontColorDis};
    background-color: ${({ theme }: ButtonProps) => theme.buttonColorDis};
  }
`;

const BaseButton: React.FC<BaseButtonProps> = ({
  disabled,
  children,
  className,
}: BaseButtonProps) => {
  const { theme } = useThemeContext();

  return (
    <Button theme={theme} disabled={disabled} className={className}>
      {children}
    </Button>
  );
};

export default BaseButton;
