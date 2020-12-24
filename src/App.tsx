import React, { useState, useCallback } from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import styled from 'styled-components';

import { Theme, ReglamentTheme } from '@reglament';

import { ThemeProvider } from './utils/contexts/ThemeContext';
import { THEMES } from './utils/constants';
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

const App: React.FC<AppProps> = ({ route }: AppProps) => {
  const [theme, setTheme] = useState(THEMES.light as Theme);

  const changeTheme = useCallback(
    (theme: ReglamentTheme) => {
      console.log('changeTheme', theme);

      switch (theme) {
        case 'light':
          return setTheme(() => THEMES.light);

        case 'dark':
          return setTheme(() => THEMES.dark);

        default:
          return setTheme(() => THEMES.sepia);
      }
    },
    [setTheme],
  );

  return (
    <ThemeProvider theme={theme} changeTheme={changeTheme}>
      <AppContainer theme={theme}>
        <GlobalStyle />

        <RootComponent route={route} />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
