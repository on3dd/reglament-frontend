import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

import NavbarComponent from '../navbar';
import MainComponent from '../main';
import FooterComponent from '../footer';
import ThemeSwitch from '../theme-switch';

type RootProps = {
  route?: RouteConfig;
};

const Root: React.FC<RootProps> = ({ route }: RootProps) => {
  return (
    <React.Fragment>
      <ThemeSwitch />

      <NavbarComponent />

      <MainComponent>{route && renderRoutes(route.routes)}</MainComponent>

      <FooterComponent />
    </React.Fragment>
  );
};

export default Root;
