import React from 'react';
import styled from 'styled-components';

import { PropsWithTable } from '@reglament';

import TableBodyTable from './table';

type TableBodyProps = PropsWithTable<{}>;

const BodyContainer = styled.div`
  margin-bottom: 0.85rem;
`;

const TableBody: React.FC<TableBodyProps> = ({
  instance,
}: TableBodyProps) => {
  return (
    <BodyContainer className="table__body">
      <TableBodyTable instance={instance} />
    </BodyContainer>
  );
};

export default TableBody;
