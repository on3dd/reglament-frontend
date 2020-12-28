import React, { useEffect, useMemo, useCallback } from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { Theme, ReglamentTheme } from '@reglament';

import { useFontStore } from './store/font';
import { useThemeStore } from './store/theme';
import { useSiteInfoStore } from './store/site-info';

import GlobalStyle from './utils/globalStyle';
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
  const {
    store: {
      font: { fontSize, lineHeight },
    },
  } = useFontStore();
  const { store: themeStore } = useThemeStore();
  const { store: siteInfoStore } = useSiteInfoStore();

  useEffect(() => {
    autorun(() => {
      siteInfoStore.fetchSiteInfo();
    });
  }, [siteInfoStore]);

  const theme = useMemo(() => {
    return themeStore.theme;
  }, [themeStore.theme]);

  const changeTheme = useCallback(
    (theme: ReglamentTheme) => {
      themeStore.changeTheme(theme);
    },
    [themeStore],
  );

  return (
    <ThemeProvider theme={theme} changeTheme={changeTheme}>
      <AppContainer theme={theme}>
        <GlobalStyle fontSize={fontSize} lineHeight={lineHeight} />

        <RootComponent route={route} />
      </AppContainer>
    </ThemeProvider>
  );
});

export default App;
