import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { HelmetProvider } from 'react-helmet-async';

import { AuthStateProvider } from './store/auth';
import { ThemeStateProvider } from './store/theme';
import { SearchStateProvider } from './store/search';
import { DocumentStateProvider } from './store/document';
import { SiteInfoStateProvider } from './store/site-info';

import routes from './router';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
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
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
