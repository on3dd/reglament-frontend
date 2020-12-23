import React from 'react';
import {
  renderRoutes,
  RouteConfigComponentProps,
} from 'react-router-config';
import styled from 'styled-components';

import GlobalStyle from './utils/globalStyle';

import Navbar from './components/base-ui/navbar';
import Main from './components/base-ui/main';
import Footer from './components/base-ui/footer';
import ThemeSwitch from './components/base-ui/theme-switch';

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

type AppProps = RouteConfigComponentProps<{}>;

const App: React.FC<AppProps> = ({ route }: AppProps) => {
  return (
    <AppContainer>
      <GlobalStyle />

      <ThemeSwitch />

      <Navbar />

      <Main>{route && renderRoutes(route.routes)}</Main>

      <Footer />
    </AppContainer>
  );
};

export default App;
