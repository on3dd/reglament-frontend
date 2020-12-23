import React, { useState } from 'react';
import styled from 'styled-components';

import Icon from '../icon';
import ThemeSwitchBody from './body';

const ThemeSwitchContainer = styled.div`
  position: fixed;
  top: 0%;
  width: 100%;
`;

const ThemeSwitchWrapper = styled.div`
  position: fixed;
  top: 4rem;
  right: 2.5rem;
  z-index: 100;
`;

const ThemeSwitchIcon = styled(Icon)`
  width: 3rem;
  height: 2rem;
`;

const BaseThemeSwitch: React.FC = () => {
  const [visible, setVisible] = useState(true);

  return (
    <ThemeSwitchContainer>
      {visible && <ThemeSwitchBody />}

      <ThemeSwitchWrapper>
        <ThemeSwitchIcon name="eye" />
      </ThemeSwitchWrapper>
    </ThemeSwitchContainer>
  );
};

export default BaseThemeSwitch;
