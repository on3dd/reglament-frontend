import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { AuthStateProvider } from './store/auth';
import { ThemeStateProvider } from './store/theme';

import routes from './router';

ReactDOM.render(
  <React.StrictMode>
    <AuthStateProvider>
      <ThemeStateProvider>
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
      </ThemeStateProvider>
    </AuthStateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
