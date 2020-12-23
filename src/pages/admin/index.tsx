import React from 'react';
import {
  renderRoutes,
  RouteConfigComponentProps,
} from 'react-router-config';
import styled from 'styled-components';

type AdminProps = RouteConfigComponentProps<{}>;

const Container = styled.div``;

const Admin: React.FC<AdminProps> = ({ route }: AdminProps) => {
  return <Container>{route && renderRoutes(route.routes)}</Container>;
};

export default Admin;
