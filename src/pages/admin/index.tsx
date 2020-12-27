import React, { useCallback } from 'react';
import { Redirect } from 'react-router';
import {
  renderRoutes,
  RouteConfigComponentProps,
} from 'react-router-config';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { useAuthStore } from '../../store/auth';

type AdminProps = RouteConfigComponentProps<{}>;

const Container = styled.div``;

const Admin: React.FC<AdminProps> = observer(({ route }: AdminProps) => {
  const { store } = useAuthStore();

  const renderRouter = useCallback(() => {
    return route ? renderRoutes(route.routes) : null;
  }, [route]);

  const renderRedirect = useCallback(() => {
    return <Redirect to="/auth" />;
  }, []);

  return (
    <Container>
      {store.token ? renderRouter() : renderRedirect()}
    </Container>
  );
});

export default Admin;
