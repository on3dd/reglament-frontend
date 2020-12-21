import App from '../App';

// import Root from '../pages/index';
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
    ],
  },
];

export default routes;
