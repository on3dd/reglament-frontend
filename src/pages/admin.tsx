import React from 'react';
import styled from 'styled-components';

import AdminComponent from '../components/admin';

const Div = styled.div`
  margin-top: 70px;
`;

const Admin: React.FC = () => {
  return (
    <Div>
      <AdminComponent />
    </Div>
  );
};

export default Admin;
