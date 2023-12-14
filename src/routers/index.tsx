import { Homepage } from '@/pages/Home';
import { Test2 } from '@/pages/Test2';

const coreRoutes = [
  {
    path: '/',
    title: 'Home Page',
    component: Homepage,
  },
  {
    path: '/test2',
    title: 'Test 2',
    component: Test2,
  },
];

const routes = [...coreRoutes];
export default routes;
