import { useRoutes } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import ErrorPage from '../pages/ErrorPage';

import { getRoutes } from './MenuList';

export default function CombineRoutes() {
  const routes = getRoutes();
  return useRoutes([
    { path: '/main', element: <MainPage /> },
    { path: '*', element: <ErrorPage /> },
    ...routes,
  ]);
}
