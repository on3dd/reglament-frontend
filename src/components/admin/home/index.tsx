import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AdminHomeContainer = styled.div``;

const AdminHomeLink = styled(Link)`
  display: block;
  color: #0066b3;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

const AdminHomeComponent: React.FC = () => {
  return (
    <AdminHomeContainer>
      <AdminHomeLink to="/admin/add">
        Добавить новый документ
      </AdminHomeLink>

      <AdminHomeLink to="/admin/edit">
        Изменить информацию о сервисе
      </AdminHomeLink>
    </AdminHomeContainer>
  );
};

export default AdminHomeComponent;
