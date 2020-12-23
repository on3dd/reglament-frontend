import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import ThemeSwitchBody from './body';
import ThemeSwitchSwitcher from './switcher';

const ThemeSwitchContainer = styled.div`
  position: fixed;
  top: 0%;
  width: 100%;
`;

const BaseThemeSwitch: React.FC = () => {
  const [visible, setVisible] = useState(true);

  const onClick = useCallback(() => {
    setVisible((prev) => !prev);
  }, [setVisible]);

  return (
    <ThemeSwitchContainer>
      {visible === false ? (
        <ThemeSwitchBody onClick={onClick} />
      ) : (
        <ThemeSwitchSwitcher onClick={onClick} />
      )}
    </ThemeSwitchContainer>
  );
};

export default BaseThemeSwitch;
