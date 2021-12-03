import { useRoutes } from 'react-router-dom';

import eslPdaRoutes from './eslPdaRoutes';
import LmsRoutes from './LmsRoutes';

export default function ThemeRoutes() {
  return useRoutes([eslPdaRoutes, LmsRoutes]);
}
