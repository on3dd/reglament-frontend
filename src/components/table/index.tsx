import React, { useEffect } from 'react';
import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useTable, usePagination } from 'react-table';
import styled from 'styled-components';

import { useSearchStore } from '../../store/search';

import { columns, initialState } from './config';

import TableHeader from './header';
import TableBody from './body';
import TableFooter from './footer';

const TableContainer = styled.div``;

const TableComponent: React.FC = observer(() => {
  const { store } = useSearchStore();

  const instance = useTable(
    {
      columns,
      initialState,
      data: store.result,
    },
    usePagination,
  );

  useEffect(() => {
    autorun(() => {
      store.search({});
    });
  }, [store]);

  return (
    <TableContainer className="table">
      <TableHeader />
      <TableBody instance={instance} />
      <TableFooter />
    </TableContainer>
  );
});

export default TableComponent;
