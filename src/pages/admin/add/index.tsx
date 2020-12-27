import React from 'react';
import { Helmet } from 'react-helmet-async';

import { title } from '../../../utils/functions';

import DefaultLayout from '../../../layouts/default';
import AdminAddComponent from '../../../components/admin/add';

const AdminAdd: React.FC = () => {
  return (
    <DefaultLayout heading="Добавление нового документа">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title('Добавление нового документа')}</title>
      </Helmet>

      <AdminAddComponent />
    </DefaultLayout>
  );
};

export default AdminAdd;
