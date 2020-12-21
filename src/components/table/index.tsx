import React from 'react';
import styled from 'styled-components';

import TableHeader from './header';
import TableBody from './body';

const TableContainer = styled.div`
  width: 100%;
`;

const TableComponent: React.FC = () => {
  return (
    <TableContainer className="table">
      <TableHeader />
      <TableBody />
    </TableContainer>
  );
};

export default TableComponent;
