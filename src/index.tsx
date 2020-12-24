import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { AuthStateProvider } from './store/auth';
import { ThemeStateProvider } from './store/theme';
import { DocumentStateProvider } from './store/document';

import routes from './router';

ReactDOM.render(
  <React.StrictMode>
    <ThemeStateProvider>
      <AuthStateProvider>
        <DocumentStateProvider>
          <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
        </DocumentStateProvider>
      </AuthStateProvider>
    </ThemeStateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
