import AccountCircle from '@mui/icons-material/AccountCircle';
import LocationSearching from '@mui/icons-material/LocationSearching';
import MoveToInbox from '@mui/icons-material/MoveToInbox';
import Outbox from '@mui/icons-material/Outbox';

import FindLocationPage from '../pages/esl/FindLocationPage';
import RackInPage from '../pages/esl/RackInPage';
import RackOutPage from '../pages/esl/RackOutPage';
import FacilityStatusPage from '../pages/lms/FacilityStatusPage';
import LoginPage from '../pages/LoginPage';

const MenuList = [
  {
    group: 'esl',
    text: '위치찾기',
    icon: <LocationSearching />,
    path: '/esl/find',
    element: <FindLocationPage />,
  },
  {
    group: 'esl',
    text: '랙입고',
    icon: <MoveToInbox />,
    path: '/esl/in',
    element: <RackInPage />,
  },
  {
    group: 'esl',
    text: '랙출고',
    icon: <Outbox />,
    path: '/esl/out',
    element: <RackOutPage />,
  },
  {
    group: 'lms',
    text: '실시간설비현황',
    icon: <LocationSearching />,
    path: '/lms/facilitystatus',
    element: <FacilityStatusPage />,
  },
  {
    group: 'common',
    path: '/',
    element: <LoginPage />,
  },
  {
    group: 'common',
    text: '로그아웃',
    icon: <AccountCircle />,
  },
];

export function getRoutes() {
  return MenuList.filter((element) => {
    return element.path !== undefined;
  });
}

export function getMenulist() {
  return MenuList.filter((element) => {
    return element.text !== undefined;
  });
}

export default MenuList;
