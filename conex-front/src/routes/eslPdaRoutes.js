import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import FindLocationPage from '../pages/esl/FindLocationPage';
import RackInPage from '../pages/esl/RackInPage';
import RackOutPage from '../pages/esl/RackOutPage';

//global.subPath = Config.subPath;
//global.masterSite = Config.masterSite;

const eslPdaRoutes = {
  path: '/',
  element: <LoginPage />,
  children: [
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/find',
      element: <FindLocationPage />,
    },
    {
      path: '/in',
      element: <RackInPage />,
    },
    {
      path: '/out',
      element: <RackOutPage />,
    },
  ],
};

export default eslPdaRoutes;
