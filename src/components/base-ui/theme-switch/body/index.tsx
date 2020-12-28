import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { FontDraft, ReglamentTheme } from '@reglament';

import { useFontStore } from '../../../../store/font';

import Container from '../../container';
import ThemeSwitchBodyItem from './item';
import ThemeSwitchBodyClose from './close';
import ThemeSwitchBodyButton from './button';

type ThemeSwitchBodyProps = {
  onFontChange: (theme: FontDraft) => void;
  onThemeChange: (theme: ReglamentTheme) => void;
  onSwitcherClick: (...args: any[]) => void;
};

const BodyContainer = styled.div`
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

const ThemeSwitchBody: React.FC<ThemeSwitchBodyProps> = observer(
  ({
    onFontChange,
    onThemeChange,
    onSwitcherClick,
  }: ThemeSwitchBodyProps) => {
    const {
      store: {
        font: { fontSize, lineHeight },
      },
    } = useFontStore();

    return (
      <BodyContainer>
        <StyledContainer>
          <ThemeSwitchBodyGroup>
            <ThemeSwitchBodyItem heading="Размер шрифта">
              <ThemeSwitchBodyButton
                name="font_dec"
                title="Уменьшить размер шрифта"
                onClick={() => onFontChange({ fontSize: fontSize - 1 })}
              />

              <ThemeSwitchBodyButton
                name="font_black"
                title="Размер шрифта по умолчанию"
                onClick={() => onFontChange({ fontSize: 14 })}
              />

              <ThemeSwitchBodyButton
                name="font_inc"
                title="Увеличить размер шрифта"
                onClick={() => onFontChange({ fontSize: fontSize + 1 })}
              />
            </ThemeSwitchBodyItem>

            <ThemeSwitchBodyItem heading="Интервалы">
              <ThemeSwitchBodyButton
                name="interval_dec"
                title="Уменьшить межстрочный интервал"
                onClick={() =>
                  onFontChange({ lineHeight: lineHeight - 0.1 })
                }
              />

              <ThemeSwitchBodyButton
                name="dot"
                title="Межстрочный интервал по умолчанию"
                onClick={() => onFontChange({ lineHeight: 1.1 })}
              />

              <ThemeSwitchBodyButton
                name="interval_inc"
                title="Увеличить межстрочный интервал"
                onClick={() =>
                  onFontChange({ lineHeight: lineHeight + 0.1 })
                }
              />
            </ThemeSwitchBodyItem>

            <ThemeSwitchBodyItem heading="Цвета">
              <ThemeSwitchBodyButton
                name="font_white"
                scheme="black"
                title="Темная тема"
                onClick={() => onThemeChange('dark')}
              />

              <ThemeSwitchBodyButton
                name="font_black"
                scheme="white"
                title="Светлая тема"
                onClick={() => onThemeChange('light')}
              />

              <ThemeSwitchBodyButton
                name="font_sepia"
                scheme="sepia"
                title="Коричневая тема"
                onClick={() => onThemeChange('sepia')}
              />
            </ThemeSwitchBodyItem>
          </ThemeSwitchBodyGroup>

          <ThemeSwitchBodyClose
            title="Закрыть"
            onClick={onSwitcherClick}
          />
        </StyledContainer>
      </BodyContainer>
    );
  },
);

export default ThemeSwitchBody;
