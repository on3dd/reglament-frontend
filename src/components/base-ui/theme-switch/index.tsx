import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { FontDraft, ReglamentTheme } from '@reglament';

import { useFontContext } from '../../../utils/contexts/FontContext';
import { useThemeContext } from '../../../utils/contexts/ThemeContext';

import ThemeSwitchBody from './body';
import ThemeSwitchSwitcher from './switcher';

const ThemeSwitchContainer = styled.div`
  position: fixed;
  top: 0%;
  width: 100%;
`;

const BaseThemeSwitch: React.FC = () => {
  const { changeFont } = useFontContext();
  const { changeTheme } = useThemeContext();
  const [visible, setVisible] = useState(false);

  const onSwitcherClick = useCallback(() => {
    return setVisible((prev) => !prev);
  }, [setVisible]);

  const onFontChange = useCallback(
    (font: FontDraft) => {
      return changeFont(font);
    },
    [changeFont],
  );

  const onThemeChange = useCallback(
    (theme: ReglamentTheme) => {
      return changeTheme(theme);
    },
    [changeTheme],
  );

  return (
    <ThemeSwitchContainer>
      {visible === false ? (
        <ThemeSwitchSwitcher onClick={onSwitcherClick} />
      ) : (
        <ThemeSwitchBody
          onFontChange={onFontChange}
          onThemeChange={onThemeChange}
          onSwitcherClick={onSwitcherClick}
        />
      )}
    </ThemeSwitchContainer>
  );
};

export default BaseThemeSwitch;
