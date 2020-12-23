import React from 'react';

import DefaultLayout from '../../../layouts/default';
import AdminHomeComponent from '../../../components/admin/home';

const AdminHome: React.FC = () => {
  return (
    <DefaultLayout heading="Панель администратора">
      <AdminHomeComponent />
    </DefaultLayout>
  );
};

export default AdminHome;
