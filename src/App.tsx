import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './utils/globalStyle';

import Navbar from './components/base-ui/navbar';
import Footer from './components/base-ui/footer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Main = styled.main`
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyle />

      <Navbar />

      <Main></Main>

      <Footer />
    </AppContainer>
  );
};

export default App;
