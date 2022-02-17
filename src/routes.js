import Characters from './routes/characters';
import Episodes from './routes/episodes';

const routes = [
  {
    path: '/',
    component: Characters,
    exact: true,
  },
  {
    path: '/episodes',
    component: Episodes,
    exact: true,
  },
];

export default routes;
