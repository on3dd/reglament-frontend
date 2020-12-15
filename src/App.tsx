import React from 'react';
import styled from 'styled-components';

import Container from './components/base-ui/container';
import Navbar from './components/base-ui/navbar';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Container>
        <Navbar />
      </Container>
    </AppContainer>
  );
};

export default App;
