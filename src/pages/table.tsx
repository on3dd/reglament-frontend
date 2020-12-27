import React from 'react';
import { Helmet } from 'react-helmet-async';

import { title } from '../utils/functions';

import TableLayout from '../layouts/table';
import TableComponent from '../components/table';

const Table: React.FC = () => {
  return (
    <TableLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title('Главная')}</title>
      </Helmet>

      <TableComponent />
    </TableLayout>
  );
};

export default Table;
