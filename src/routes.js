import Characters from './Routes/Characters';
import Locations from './Routes/Locations';
import Episodes from './Routes/Episodes';

const routes = [
  {
    path: '/',
    component: Characters,
    exact: true
  },
  {
    path: '/locations',
    component: Locations,
    exact: true
  },
  {
    path: '/episodes',
    component: Episodes,
    exact: true
  }
];

export default routes;
