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

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

type AppProps = RouteConfigComponentProps<{}>;

const App: React.FC<AppProps> = ({ route }: AppProps) => {
  return (
    <AppContainer>
      <GlobalStyle />

      <Navbar />

      <Main>{route && renderRoutes(route.routes)}</Main>

      <Footer />
    </AppContainer>
  );
};

export default App;
