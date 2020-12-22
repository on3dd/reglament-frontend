import App from '../App';

import Auth from '../pages/auth';
import Table from '../pages/table';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Table,
      },
      {
        path: '/auth',
        exact: true,
        component: Auth,
      },
    ],
  },
];

export default routes;
