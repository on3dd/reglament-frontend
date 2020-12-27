import React from 'react';
import { Helmet } from 'react-helmet-async';

import { title } from '../../../utils/functions';

import DefaultLayout from '../../../layouts/default';
import AdminHomeComponent from '../../../components/admin/home';

const AdminHome: React.FC = () => {
  return (
    <DefaultLayout heading="Панель администратора">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title('Панель администратора')}</title>
      </Helmet>

      <AdminHomeComponent />
    </DefaultLayout>
  );
};

export default AdminHome;
