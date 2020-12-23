import React from 'react';
import { TableInstance } from 'react-table';
import styled, { css } from 'styled-components';

import { Document, PropsWithTheme } from '@reglament';

type TableBodyTableProps = {
  instance: TableInstance<Document>;
};

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
    rows,
    headerGroups,
    prepareRow,
    getTableProps,
    getTableBodyProps,
  } = instance;

  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th {...column.getHeaderProps()}>
                {column.render('Header')}
              </Th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
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
