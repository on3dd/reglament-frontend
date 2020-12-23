import React from 'react';
import styled from 'styled-components';

import Container from '../../container';
import ThemeSwitchBodyItem from './item';
import ThemeSwitchBodyButton from './button';

const BodyContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  background-color: #f2f2f2;
`;

const StyledContainer = styled(Container)`
  display: flex;
`;

const ThemeSwitchBody: React.FC = () => {
  return (
    <BodyContainer>
      <StyledContainer>
        <ThemeSwitchBodyItem heading="Размер шрифта">
          <ThemeSwitchBodyButton name="font_dec" />
          <ThemeSwitchBodyButton name="font_inc" />
        </ThemeSwitchBodyItem>

        <ThemeSwitchBodyItem heading="Интервалы">
          <ThemeSwitchBodyButton name="interval_dec" />
          <ThemeSwitchBodyButton name="interval_inc" />
        </ThemeSwitchBodyItem>

        <ThemeSwitchBodyItem heading="Цвета">
          <ThemeSwitchBodyButton name="font" />
          <ThemeSwitchBodyButton name="font" />
          <ThemeSwitchBodyButton name="font" />
        </ThemeSwitchBodyItem>
      </StyledContainer>
    </BodyContainer>
  );
};

export default ThemeSwitchBody;
