import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './utils/globalStyle';

import RouterView from './pages';

import Navbar from './components/base-ui/navbar';
import Main from './components/base-ui/main';
import Footer from './components/base-ui/footer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyle />

      <Navbar />

      <Main>
        <RouterView />
      </Main>

      <Footer />
    </AppContainer>
  );
};

export default App;
