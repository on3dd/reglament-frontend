import React from 'react';

import DefaultLayout from '../../../layouts/default';
import AdminEditComponent from '../../../components/admin/edit';

const AdminEdit: React.FC = () => {
  return (
    <DefaultLayout heading="Изменение информации о сервисе">
      <AdminEditComponent />
    </DefaultLayout>
  );
};

export default AdminEdit;
