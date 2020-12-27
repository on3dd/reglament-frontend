import React from 'react';
import { Helmet } from 'react-helmet-async';

import { title } from '../utils/functions';

import DefaultLayout from '../layouts/default';
import AuthComponent from '../components/auth';

const Auth: React.FC = () => {
  return (
    <DefaultLayout heading="Авторизация">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title('Авторизация')}</title>
      </Helmet>

      <AuthComponent />
    </DefaultLayout>
  );
};

export default Auth;
