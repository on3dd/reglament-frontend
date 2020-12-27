import React, { useEffect } from 'react';
import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { useTable, usePagination } from 'react-table';
import styled from 'styled-components';

import { PropsWithTheme } from '@reglament';

import { useAuthStore } from '../../store/auth';
import { useSearchStore } from '../../store/search';

import { useThemeContext } from '../../utils/contexts/ThemeContext';

import { columns, initialState } from './config';

import { pointer, lowercase } from '../base-ui/mixins';

import TableHeader from './header';
import TableBody from './body';
import TableFooter from './footer';

const TableContainer = styled.div``;

type TableLinkToAdminProps = PropsWithTheme<{}>;

const TableLinkToAdmin = styled(Link)`
  ${pointer}
  ${lowercase}

  display: block;
  position: fixed;
  right: 0;
  bottom: 6.75rem;
  font-size: 1.25rem;
  text-decoration: none;
  padding: 0.5rem 1rem 0.5rem 2rem;
  border-radius: 2.5rem 0px 0px 2.5rem;

  color: ${({ theme }: TableLinkToAdminProps) => {
    return theme.fontColorNeg;
  }};

  background-color: ${({ theme }: TableLinkToAdminProps) => {
    return theme.buttonColor;
  }};

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const TableComponent: React.FC = observer(() => {
  const {
    store: { token },
  } = useAuthStore();
  const { store } = useSearchStore();
  const { theme } = useThemeContext();

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
      <TableFooter instance={instance} />

      {token && (
        <TableLinkToAdmin theme={theme} to="/admin">
          Администрирование
        </TableLinkToAdmin>
      )}
    </TableContainer>
  );
});

export default TableComponent;
