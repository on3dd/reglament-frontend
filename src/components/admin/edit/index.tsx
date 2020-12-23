import React from 'react';
import styled from 'styled-components';

import AdminEditForm from './form';

const AdminEditContainer = styled.div``;

const AdminEditComponent: React.FC = () => {
  return (
    <AdminEditContainer>
      <AdminEditForm />
    </AdminEditContainer>
  );
};

export default AdminEditComponent;
