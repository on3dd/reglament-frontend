import React from 'react';

import DefaultLayout from '../layouts/default';
import AuthComponent from '../components/auth';

const Auth: React.FC = () => {
  return (
    <DefaultLayout heading="Авторизация">
      <AuthComponent />
    </DefaultLayout>
  );
};

export default Auth;
