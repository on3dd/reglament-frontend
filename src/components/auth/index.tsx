import React from 'react';
import styled from 'styled-components';

import AuthForm from './form';

const AuthContainer = styled.div`
  width: 100%;
`;

const AuthHeading = styled.h2`
  color: #0066b3;
  margin: 0 0 3rem 0;
`;

const AuthComponent: React.FC = () => {
  return (
    <AuthContainer>
      <AuthHeading>Авторизация</AuthHeading>
      <AuthForm />
    </AuthContainer>
  );
};

export default AuthComponent;
