import React from 'react';
import styled from 'styled-components';

import AuthForm from './form';

const AuthContainer = styled.div``;

const AuthComponent: React.FC = () => {
  return (
    <AuthContainer>
      <AuthForm />
    </AuthContainer>
  );
};

export default AuthComponent;
