import React from 'react';
import { Helmet } from 'react-helmet-async';

import { title } from '../../../utils/functions';

import DefaultLayout from '../../../layouts/default';
import AdminEditComponent from '../../../components/admin/edit';

const AdminEdit: React.FC = () => {
  return (
    <DefaultLayout heading="Изменение информации о сервисе">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title('Изменение информации о сервисе')}</title>
      </Helmet>

      <AdminEditComponent />
    </DefaultLayout>
  );
};

export default AdminEdit;
