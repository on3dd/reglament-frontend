import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { ThemeStateProvider } from './store/theme';

import routes from './router';

ReactDOM.render(
  <React.StrictMode>
    <ThemeStateProvider>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </ThemeStateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
