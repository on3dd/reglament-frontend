import React from 'react';
import styled from 'styled-components';

import { ReglamentTheme } from '@reglament';

import { visible } from '../../mixins';

import Container from '../../container';
import ThemeSwitchBodyItem from './item';
import ThemeSwitchBodyClose from './close';
import ThemeSwitchBodyButton from './button';

type ThemeSwitchBodyProps = {
  visible: boolean;
  onSwitcherClick: (...args: any[]) => void;
  onThemeChange: (theme: ReglamentTheme) => void;
};

const BodyContainer = styled.div`
  ${visible}

  width: 100%;
  padding: 1rem 0;

  color: #000000;
  background-color: #f2f2f2;
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

const ThemeSwitchBodyGroup = styled.div`
  display: flex;
`;

const ThemeSwitchBody: React.FC<ThemeSwitchBodyProps> = ({
  visible,
  onThemeChange,
  onSwitcherClick,
}: ThemeSwitchBodyProps) => {
  return (
    <BodyContainer visible={visible}>
      <StyledContainer>
        <ThemeSwitchBodyGroup>
          <ThemeSwitchBodyItem heading="Размер шрифта">
            <ThemeSwitchBodyButton name="font_dec" />
            <ThemeSwitchBodyButton name="font_inc" />
          </ThemeSwitchBodyItem>

          <ThemeSwitchBodyItem heading="Интервалы">
            <ThemeSwitchBodyButton name="interval_dec" />
            <ThemeSwitchBodyButton name="interval_inc" />
          </ThemeSwitchBodyItem>

          <ThemeSwitchBodyItem heading="Цвета">
            <ThemeSwitchBodyButton
              name="font_white"
              scheme="black"
              onClick={() => onThemeChange('dark')}
            />

            <ThemeSwitchBodyButton
              name="font_black"
              scheme="white"
              onClick={() => onThemeChange('light')}
            />

            <ThemeSwitchBodyButton
              name="font_sepia"
              scheme="sepia"
              onClick={() => onThemeChange('sepia')}
            />
          </ThemeSwitchBodyItem>
        </ThemeSwitchBodyGroup>

        <ThemeSwitchBodyClose onClick={onSwitcherClick} />
      </StyledContainer>
    </BodyContainer>
  );
};

export default ThemeSwitchBody;
