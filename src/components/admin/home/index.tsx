import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { PropsWithTheme } from '@reglament';

import { useThemeContext } from '../../../utils/contexts/ThemeContext';

type AdminHomeContainerProps = PropsWithTheme<{}>;

const AdminHomeContainer = styled.div`
  display: inline-block;

  a {
    color: ${({ theme }: AdminHomeContainerProps) => {
      return theme.linkColor;
    }};
  }
`;

const AdminHomeLink = styled(Link)`
  display: block;
  color: inherit;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

const AdminHomeComponent: React.FC = () => {
  const { theme } = useThemeContext();

  return (
    <AdminHomeContainer theme={theme}>
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
