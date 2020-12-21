import React from 'react';
import styled from 'styled-components';

import TableComponent from '../components/table';

const Div = styled.div`
  margin-top: 10px;
`;

const Table: React.FC = () => {
  return (
    <Div>
      <TableComponent />
    </Div>
  );
};

export default Table;
