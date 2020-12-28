import React, { useEffect, useMemo, useCallback } from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { Theme, ReglamentTheme, FontDraft } from '@reglament';

import { useFontStore } from './store/font';
import { useThemeStore } from './store/theme';
import { useSiteInfoStore } from './store/site-info';

import GlobalStyle from './utils/globalStyle';
import { FontProvider } from './utils/contexts/FontContext';
import { ThemeProvider } from './utils/contexts/ThemeContext';

import RootComponent from './components/base-ui/root';

type AppContainerProps = {
  theme: Theme;
};

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  color: ${({ theme }: AppContainerProps) => {
    return theme.fontColor;
  }};

  background-color: ${({ theme }: AppContainerProps) => {
    return theme.backgroundColor;
  }};
`;

type AppProps = RouteConfigComponentProps<{}>;

const App: React.FC<AppProps> = observer(({ route }: AppProps) => {
  const { store: fontStore } = useFontStore();
  const { store: themeStore } = useThemeStore();
  const { store: siteInfoStore } = useSiteInfoStore();

  useEffect(() => {
    autorun(() => {
      siteInfoStore.fetchSiteInfo();
    });
  }, [siteInfoStore]);

  const font = useMemo(() => {
    return fontStore.font;
  }, [fontStore.font]);

  const theme = useMemo(() => {
    return themeStore.theme;
  }, [themeStore.theme]);

  const changeFont = useCallback(
    (font: FontDraft) => {
      fontStore.changeFont(font);
    },
    [fontStore],
  );

  const changeTheme = useCallback(
    (theme: ReglamentTheme) => {
      themeStore.changeTheme(theme);
    },
    [themeStore],
  );

  return (
    <FontProvider font={font} changeFont={changeFont}>
      <ThemeProvider theme={theme} changeTheme={changeTheme}>
        <AppContainer theme={theme}>
          <GlobalStyle
            fontSize={font.fontSize}
            lineHeight={font.lineHeight}
          />

          <RootComponent route={route} />
        </AppContainer>
      </ThemeProvider>
    </FontProvider>
  );
});

export default App;
