import App from '../App';

import Auth from '../pages/auth';
import Admin from '../pages/admin';
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
      {
        path: '/admin',
        exact: true,
        component: Admin,
      },
    ],
  },
];

export default routes;
