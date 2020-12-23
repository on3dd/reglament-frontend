import App from '../App';

import Auth from '../pages/auth';
import Table from '../pages/table';
import Admin from '../pages/admin';
import AdminAdd from '../pages/admin/add';
import AdminEdit from '../pages/admin/edit';
import AdminHome from '../pages/admin/home';

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
        component: Admin,
        routes: [
          {
            path: '/admin',
            exact: true,
            component: AdminHome,
          },
          {
            path: '/admin/add',
            component: AdminAdd,
          },
          {
            path: '/admin/edit',
            component: AdminEdit,
          },
        ],
      },
    ],
  },
];

export default routes;
