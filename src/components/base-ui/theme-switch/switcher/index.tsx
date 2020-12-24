import React from 'react';
import styled from 'styled-components';

import Icon from '../../icon';

type ThemeSwitchSwitcherProps = {
  onClick: (...args: any[]) => void;
};

const ThemeSwitchContainer = styled.div`
  position: fixed;
  top: 4rem;
  right: 2.5rem;
  z-index: 100;
`;

const ThemeSwitchButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.1s ease-out;

  &:hover,
  &:focus,
  &:active {
    filter: brightness(50%);
  }
`;

const ThemeSwitchIcon = styled(Icon)`
  width: 3rem;
  height: 2rem;
  transition: color 0.1s ease-out;
`;

const ThemeSwitchSwitcher: React.FC<ThemeSwitchSwitcherProps> = ({
  onClick,
}: ThemeSwitchSwitcherProps) => {
  return (
    <ThemeSwitchContainer>
      <ThemeSwitchButton onClick={onClick}>
        <ThemeSwitchIcon name="eye" />
      </ThemeSwitchButton>
    </ThemeSwitchContainer>
  );
};

export default ThemeSwitchSwitcher;
