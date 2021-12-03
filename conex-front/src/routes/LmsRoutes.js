import LoginPage from '../pages/LoginPage';
import FacilityStatusPage from '../pages/lms/FacilityStatusPage';

const lmsRoutes = {
  path: '/',
  element: <LoginPage />,
  children: [
    {
      path: '/',
      element: <FacilityStatusPage />,
    },
    {
      path: '/facilitystatus',
      element: <FacilityStatusPage />,
    },
  ],
};

export default lmsRoutes;
