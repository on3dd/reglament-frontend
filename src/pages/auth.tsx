import React from 'react';
import styled from 'styled-components';

import AuthComponent from '../components/auth';

const Div = styled.div`
  margin-top: 70px;
`;

const Auth: React.FC = () => {
  return (
    <Div>
      <AuthComponent />
    </Div>
  );
};

export default Auth;
