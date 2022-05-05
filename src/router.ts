import Home from './pages/Home';
import List from './pages/List';

const routes = [
  {
    path: '/list',
    component: List,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '*',
    component: Home,
  }
];

export default routes;