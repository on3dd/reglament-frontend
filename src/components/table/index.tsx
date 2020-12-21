import React from 'react';
import styled from 'styled-components';

import TableHeader from './header';

const TableContainer = styled.div`
  width: 100%;
`;

const TableComponent: React.FC = () => {
  return (
    <TableContainer className="table">
      <TableHeader />
    </TableContainer>
  );
};

export default TableComponent;
