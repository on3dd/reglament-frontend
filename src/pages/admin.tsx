import React from 'react';

import DefaultLayout from '../layouts/default';
import AdminComponent from '../components/admin';

const Admin: React.FC = () => {
  return (
    <DefaultLayout heading="Панель администратора">
      <AdminComponent />
    </DefaultLayout>
  );
};

export default Admin;
