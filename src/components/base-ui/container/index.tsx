import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type BaseContainerProps = {};

const Container = styled.div`
  width: 100%;
  max-width: 1200px !important;
`;

const BaseContainer: React.FC<PropsWithChildren<BaseContainerProps>> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};

export default BaseContainer;
