import React from 'react';
import styled from 'styled-components';

import { Icon } from '@reglament';

import IconComponent from '../../../icon';

type ThemeSwitchBodyButtonProps = {
  name: Icon;
};

const SwitchButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  border-radius: 0px;
`;

const SwitchIcon = styled(IconComponent)`
  display: block;
  margin: auto;
  height: 0.8rem;
`;

const ThemeSwitchBodyButton: React.FC<ThemeSwitchBodyButtonProps> = ({
  name,
}: ThemeSwitchBodyButtonProps) => {
  return (
    <SwitchButton>
      <SwitchIcon name={name} />
    </SwitchButton>
  );
};

export default ThemeSwitchBodyButton;
