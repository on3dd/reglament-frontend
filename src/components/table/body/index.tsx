import React, { useEffect } from 'react';
import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useTable } from 'react-table';
import styled from 'styled-components';

import { useSearchStore } from '../../../store/search';

import { columns } from './config';

import TableBodyTable from './table';

const BodyContainer = styled.div`
  margin-bottom: 0.85rem;
`;

const TableBody: React.FC = observer(() => {
  const { store } = useSearchStore();
  const instance = useTable({ columns, data: store.result });

  useEffect(() => {
    autorun(() => {
      store.search({});
    });
  }, [store]);

  return (
    <BodyContainer className="table__body">
      <TableBodyTable instance={instance} />
    </BodyContainer>
  );
});

export default TableBody;
