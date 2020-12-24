import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { ReglamentTheme } from '@reglament';

import { useThemeContext } from '../../../utils/contexts/ThemeContext';

import ThemeSwitchBody from './body';
import ThemeSwitchSwitcher from './switcher';

const ThemeSwitchContainer = styled.div`
  position: fixed;
  top: 0%;
  width: 100%;
`;

const BaseThemeSwitch: React.FC = () => {
  const { changeTheme } = useThemeContext();
  const [visible, setVisible] = useState(true);

  const onSwitcherClick = useCallback(() => {
    return setVisible((prev) => !prev);
  }, [setVisible]);

  const onThemeChange = useCallback(
    (theme: ReglamentTheme) => {
      return changeTheme(theme);
    },
    [changeTheme],
  );

  return (
    <ThemeSwitchContainer>
      {visible === false ? (
        <ThemeSwitchBody
          onThemeChange={onThemeChange}
          onSwitcherClick={onSwitcherClick}
        />
      ) : (
        <ThemeSwitchSwitcher onClick={onSwitcherClick} />
      )}
    </ThemeSwitchContainer>
  );
};

export default BaseThemeSwitch;
