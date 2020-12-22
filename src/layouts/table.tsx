import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type TableLayoutProps = PropsWithChildren<{}>;

const Container = styled.div`
  width: 100%;
`;

const TableLayout: React.FC = ({ children }: TableLayoutProps) => {
  return <Container>{children}</Container>;
};

export default TableLayout;
