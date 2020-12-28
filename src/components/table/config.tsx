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
    Cell: ({ value }) => new Date(value).toLocaleDateString('ru'),
  },
  {
    Header: 'Номер документа',
    accessor: 'number',
  },
  {
    Header: 'Наименование',
    accessor: 'name',
    Cell: ({ value, data, row: { index } }) => (
      <TableLink href={data[index].file_path}>{value}</TableLink>
    ),
  },
  {
    Header: 'Дата размещения',
    accessor: 'created_at',
    Cell: ({ value }) => new Date(value).toLocaleDateString('ru'),
  },
];

export const initialState: Partial<TableState<DocumentModel>> & any = {
  pageIndex: 0,
  pageSize: 20,
};
