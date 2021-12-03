import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocationSearching from '@mui/icons-material/LocationSearching';
import MoveToInbox from '@mui/icons-material/MoveToInbox';
import Outbox from '@mui/icons-material/Outbox';
import Close from '@mui/icons-material/Close';

const Menu = ({ menuOpen, closeMenu, menuClick }) => {
  const list1 = [
    {
      text: '위치찾기',
      icon: <LocationSearching />,
    },
    {
      text: '랙입고',
      icon: <MoveToInbox />,
    },
    {
      text: '랙출고',
      icon: <Outbox />,
    },
  ];

  const list2 = [
    {
      text: '실시간설비현황',
      icon: <LocationSearching />,
    },
    {
      text: '로그아웃',
      icon: <AccountCircle />,
    },
  ];

  const list = () => (
    <Box
      sx={{ width: 300, height: '100vh', bgcolor: 'transparent' }}
      role="presentation"
    >
      <div
        style={{
          display: 'flex',
          //alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <IconButton onClick={closeMenu}>
          <Close />
        </IconButton>
      </div>
      <Divider />
      <List>
        {list1.map((list, index) => (
          <ListItem
            button
            key={list.text}
            onClick={(e) => menuClick(e, list.text)}
          >
            <ListItemIcon>{list.icon}</ListItemIcon>
            <ListItemText primary={list.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {list2.map((list, index) => (
          <ListItem
            button
            key={list.text}
            onClick={(e) => menuClick(e, list.text)}
          >
            <ListItemIcon>{list.icon}</ListItemIcon>
            <ListItemText primary={list.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer anchor="left" open={menuOpen}>
        {list()}
      </Drawer>
    </>
  );
};

export default Menu;
