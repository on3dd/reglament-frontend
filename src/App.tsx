import React, { useMemo, useCallback } from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { Theme, ReglamentTheme } from '@reglament';

import { useThemeStore } from './store/theme';

import { ThemeProvider } from './utils/contexts/ThemeContext';
import GlobalStyle from './utils/globalStyle';

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
  const { store } = useThemeStore();

  const theme = useMemo(() => {
    return store.theme;
  }, [store.theme]);

  const changeTheme = useCallback(
    (theme: ReglamentTheme) => {
      store.changeTheme(theme);
    },
    [store],
  );

  return (
    <ThemeProvider theme={theme} changeTheme={changeTheme}>
      <AppContainer theme={theme}>
        <GlobalStyle />

        <RootComponent route={route} />
      </AppContainer>
    </ThemeProvider>
  );
});

export default App;
