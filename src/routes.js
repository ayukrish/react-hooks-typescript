import Characters from './routes/characters';
import Locations from './routes/locations';
import Episodes from './routes/episodes';

const routes = [
  {
    path: '/',
    component: Characters,
    exact: true,
  },
  {
    path: '/locations',
    component: Locations,
    exact: true,
  },
  {
    path: '/episodes',
    component: Episodes,
    exact: true,
  },
];

export default routes;
