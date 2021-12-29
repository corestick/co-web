import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';

import { getMenulist } from '../../routes/MenuList';

const Menu = ({ menuOpen, closeMenu, menuClick }) => {
  const menuList = getMenulist();

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
      <List>
        {menuList.map((list, index) => (
          <div key={`Div_${index}`}>
            {index === 0 || list.group !== menuList[index - 1].group ? (
              <Divider />
            ) : null}
            <ListItem button key={index} onClick={(e) => menuClick(e, list)}>
              <ListItemIcon>{list.icon}</ListItemIcon>
              <ListItemText primary={list.text} />
            </ListItem>
          </div>
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
