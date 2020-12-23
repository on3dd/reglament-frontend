import React from 'react';

import DefaultLayout from '../../../layouts/default';
import AdminAddComponent from '../../../components/admin/add';

const AdminAdd: React.FC = () => {
  return (
    <DefaultLayout heading="Добавление нового документа">
      <AdminAddComponent />
    </DefaultLayout>
  );
};

export default AdminAdd;
