import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { PropsWithTheme } from '@reglament';

import { useThemeContext } from '../utils/contexts/ThemeContext';

type DefaultLayoutProps = PropsWithChildren<{
  heading: string;
}>;

type ContainerProps = PropsWithTheme<{}>;

const Container = styled.div`
  width: 100%;

  h2 {
    color: ${({ theme }: ContainerProps) => {
      return theme.primaryColor;
    }};
  }
`;

const Heading = styled.h2`
  margin: 0 0 3rem 0;
`;

const Children = styled.div`
  width: 100%;
`;

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  heading,
  children,
}: DefaultLayoutProps) => {
  const { theme } = useThemeContext();

  return (
    <Container theme={theme}>
      <Heading>{heading}</Heading>
      <Children>{children}</Children>
    </Container>
  );
};

export default DefaultLayout;
