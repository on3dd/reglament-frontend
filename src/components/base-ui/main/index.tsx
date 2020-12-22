import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import Container from '../container';

type BaseMainProps = PropsWithChildren<{}>;

const MainContainer = styled.main`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  padding-top: 1rem;
`;

const BaseMain: React.FC<BaseMainProps> = ({ children }) => {
  return (
    <MainContainer className="main">
      <Container>{children}</Container>
    </MainContainer>
  );
};

export default BaseMain;
