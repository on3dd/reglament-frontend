import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type DefaultLayoutProps = PropsWithChildren<{
  heading: string;
}>;

const Container = styled.div`
  width: 100%;
`;

const Heading = styled.h2`
  color: rgb(0, 102, 179);
  margin: 0 0 3rem 0;
`;

const Children = styled.div`
  width: 100%;
`;

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  heading,
  children,
}: DefaultLayoutProps) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Children>{children}</Children>
    </Container>
  );
};

export default DefaultLayout;
