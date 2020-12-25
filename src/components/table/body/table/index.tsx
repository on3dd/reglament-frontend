/*
  TODO: fix any's
  see 1: https://stackoverflow.com/questions/64608974/react-table-pagination-properties-doesnt-exist-on-type-tableinstance
  see 2: https://github.com/tannerlinsley/react-table/discussions/2648
*/

import React from 'react';
import styled, { css } from 'styled-components';

import { PropsWithTheme, PropsWithTable } from '@reglament';

type TableBodyTableProps = PropsWithTable<{}> & any;

const border = css`
  border: 1px solid #acacac;
`;

const cell = css`
  padding: 0.5rem;
  border-top: none;
  text-align: center;
`;

const Table = styled.table`
  ${border}

  width: 100%;
  border-collapse: collapse;
`;

type ThProps = PropsWithTheme<{}>;

const Th = styled.th`
  ${border}
  ${cell}

  color: ${({ theme }: ThProps) => theme.primaryColor};
`;

const Td = styled.td`
  ${border}
  ${cell}

  border-bottom: none;
`;

const TableBodyTable: React.FC<TableBodyTableProps> = ({
  instance,
}: TableBodyTableProps) => {
  const {
    headerGroups,
    prepareRow,
    getTableProps,
    getTableBodyProps,
    page,
  } = instance;

  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <Th {...column.getHeaderProps()}>
                {column.render('Header')}
              </Th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {page.map((row: any) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: any) => {
                return (
                  <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableBodyTable;
