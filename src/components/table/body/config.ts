import { Column } from 'react-table';

import { Document } from '@reglament';

export const data: Document[] = [
  {
    id: 5458,
    type: 'Постановление',
    name:
      'О мерах по укреплению пожарной безопасности на осенне-зимний период 2020-2021 годов ',
    agency: 'АГО',
    number: '490-па',
    date: '15.10.2020',
    create_date: '15.10.2020',
  },
  {
    id: 5459,
    type: 'Постановление',
    name:
      'О мерах по укреплению пожарной безопасности на осенне-зимний период 2020-2021 годов ',
    agency: 'АГО',
    number: '490-па',
    date: '15.10.2020',
    create_date: '15.10.2020',
  },
  {
    id: 5460,
    type: 'Постановление',
    name:
      'О мерах по укреплению пожарной безопасности на осенне-зимний период 2020-2021 годов ',
    agency: 'АГО',
    number: '490-па',
    date: '15.10.2020',
    create_date: '15.10.2020',
  },
];

export const columns: Column<Document>[] = [
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
    accessor: 'date',
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
    accessor: 'create_date',
  },
];
