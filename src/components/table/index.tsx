import React from 'react';
import styled from 'styled-components';

import TableHeader from './header';
import TableBody from './body';
import TableFooter from './footer';

const TableContainer = styled.div``;

const TableComponent: React.FC = () => {
  return (
    <TableContainer className="table">
      <TableHeader />
      <TableBody />
      <TableFooter />
    </TableContainer>
  );
};

export default TableComponent;
