// TODO: fix any

import { Column, TableState } from 'react-table';

import { DocumentModel } from '@reglament';

import TableLink from './link';

export const columns: Column<DocumentModel>[] = [
  {
    Header: '№',
    accessor: 'id',
  },
  {
    Header: 'Вид документа',
    accessor: 'type',
  },
  {
    Header: 'Орган',
    accessor: 'agency',
  },
  {
    Header: 'Дата документа',
    accessor: 'placed_at',
  },
  {
    Header: 'Номер документа',
    accessor: 'number',
  },
  {
    Header: 'Наименование',
    accessor: 'name',
    Cell: ({
      value,
      cell: {
        row: {
          values: { file_path },
        },
      },
    }) => <TableLink href={file_path}>{value}</TableLink>,
  },
  {
    Header: 'Дата размещения',
    accessor: 'created_at',
  },
];

export const initialState: Partial<TableState<DocumentModel>> & any = {
  pageIndex: 0,
  pageSize: 20,
};
