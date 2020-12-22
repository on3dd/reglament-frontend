import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AdminContainer = styled.div`
  width: 100%;
`;

const AdminHeading = styled.h2`
  color: #0066b3;
  margin: 0 0 3rem 0;
`;

const AdminLink = styled(Link)`
  display: block;
  color: #0066b3;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

const AdminComponent: React.FC = () => {
  return (
    <AdminContainer>
      <AdminHeading>Панель администратора</AdminHeading>
      <AdminLink to="/admin/new">Добавить новый документ</AdminLink>
      <AdminLink to="/admin/edit">Изменить информацию о сервисе</AdminLink>
    </AdminContainer>
  );
};

export default AdminComponent;
