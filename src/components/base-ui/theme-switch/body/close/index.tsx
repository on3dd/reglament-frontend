import React from 'react';
import styled from 'styled-components';

import Icon from '../../../icon';

type ThemeSwitchBodyCloseProps = {
  onClick: (...args: any[]) => void;
};

const Button = styled.button`
  margin: 1rem -4px auto 0;
  padding: 4px;
  height: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.1s ease-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const StyledIcon = styled(Icon)`
  height: 1.5rem;
`;

const ThemeSwitchBodyClose: React.FC<ThemeSwitchBodyCloseProps> = ({
  onClick,
}: ThemeSwitchBodyCloseProps) => {
  return (
    <Button onClick={onClick}>
      <StyledIcon name="close" />
    </Button>
  );
};

export default ThemeSwitchBodyClose;
