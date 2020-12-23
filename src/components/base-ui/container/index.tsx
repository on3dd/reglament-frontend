import React, { PropsWithChildren, HTMLProps } from 'react';
import styled from 'styled-components';

type BaseContainerProps = PropsWithChildren<
  HTMLProps<HTMLDivElement> & {}
>;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px !important;
`;

const BaseContainer: React.FC<BaseContainerProps> = ({
  children,
  className,
}: BaseContainerProps) => {
  return <Container className={className}>{children}</Container>;
};

export default BaseContainer;
