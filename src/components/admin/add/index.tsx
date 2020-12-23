import React from 'react';
import styled from 'styled-components';

import AdminAddForm from './form';

const AdminAddContainer = styled.div``;

const AdminAddComponent: React.FC = () => {
  return (
    <AdminAddContainer>
      <AdminAddForm />
    </AdminAddContainer>
  );
};

export default AdminAddComponent;
