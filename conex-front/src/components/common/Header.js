import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logout from '@mui/icons-material/Logout';

const Header = ({ openMenu, onLogout, title }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar sx={{ minHeight: 10 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={openMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{ flexGrow: 0, mr: 2 }}
            ></Typography>
            <IconButton color="inherit" onClick={onLogout}>
              <Logout />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
