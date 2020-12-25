import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { AuthStateProvider } from './store/auth';
import { ThemeStateProvider } from './store/theme';
import { SearchStateProvider } from './store/search';
import { DocumentStateProvider } from './store/document';
import { SiteInfoStateProvider } from './store/site-info';

import routes from './router';

ReactDOM.render(
  <React.StrictMode>
    <ThemeStateProvider>
      <AuthStateProvider>
        <SearchStateProvider>
          <DocumentStateProvider>
            <SiteInfoStateProvider>
              <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
            </SiteInfoStateProvider>
          </DocumentStateProvider>
        </SearchStateProvider>
      </AuthStateProvider>
    </ThemeStateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
