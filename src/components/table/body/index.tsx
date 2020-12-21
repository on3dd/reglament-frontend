import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

import { columns, data } from './config';

import TableBodyTable from './table';

const BodyContainer = styled.div`
  margin-bottom: 0.85rem;
`;

const TableBody: React.FC = () => {
  const instance = useTable({ columns, data });

  return (
    <BodyContainer className="table__body">
      <TableBodyTable instance={instance} />
    </BodyContainer>
  );
};

export default TableBody;
