import { Column } from 'react-table';

import { DocumentModel } from '@reglament';

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
  },
  {
    Header: 'Дата размещения',
    accessor: 'created_at',
  },
];
