import React from 'react';
import styled from 'styled-components';

import Container from '../../container';
import ThemeSwitchBodyItem from './item';
import ThemeSwitchBodyClose from './close';
import ThemeSwitchBodyButton from './button';

type ThemeSwitchBodyProps = {
  onClick: (...args: any[]) => void;
};

const BodyContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
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
  onClick,
}: ThemeSwitchBodyProps) => {
  return (
    <BodyContainer>
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
            <ThemeSwitchBodyButton name="font_white" scheme="black" />
            <ThemeSwitchBodyButton name="font_black" scheme="white" />
            <ThemeSwitchBodyButton name="font_sepia" scheme="sepia" />
          </ThemeSwitchBodyItem>
        </ThemeSwitchBodyGroup>

        <ThemeSwitchBodyClose onClick={onClick} />
      </StyledContainer>
    </BodyContainer>
  );
};

export default ThemeSwitchBody;
