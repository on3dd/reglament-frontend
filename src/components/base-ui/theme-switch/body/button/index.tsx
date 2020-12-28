import React from 'react';
import styled from 'styled-components';

import { Icon } from '@reglament';

import IconComponent from '../../../icon';

type ButtonScheme = 'black' | 'white' | 'sepia';

type ThemeSwitchBodyButtonProps = {
  name: Icon;
  title?: string;
  scheme?: ButtonScheme;
  onClick?: (...args: any[]) => void;
};

type SwitchControlProps = {
  scheme?: ButtonScheme;
};

const SwitchButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  border-radius: 0px;

  border-color: ${({ scheme }: SwitchControlProps) => {
    switch (scheme) {
      case 'sepia':
        return '#382819';

      default:
        return '#000000';
    }
  }};

  background-color: ${({ scheme }: SwitchControlProps) => {
    switch (scheme) {
      case 'black':
        return '#000000';

      case 'sepia':
        return '#382819';

      default:
        return 'transparent';
    }
  }};
`;

const SwitchIcon = styled(IconComponent)`
  display: block;
  margin: auto;
  height: 0.8rem;
`;

const ThemeSwitchBodyButton: React.FC<ThemeSwitchBodyButtonProps> = ({
  name,
  title = '',
  scheme = 'white',
  onClick,
}: ThemeSwitchBodyButtonProps) => {
  return (
    <SwitchButton title={title} scheme={scheme} onClick={onClick}>
      <SwitchIcon name={name} />
    </SwitchButton>
  );
};

export default ThemeSwitchBodyButton;
