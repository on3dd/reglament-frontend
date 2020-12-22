import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type BaseContainerProps = {};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px !important;
`;

const BaseContainer: React.FC<PropsWithChildren<BaseContainerProps>> = ({
  children,
}) => {
  return <Container className="container">{children}</Container>;
};

export default BaseContainer;
