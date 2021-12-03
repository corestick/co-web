import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ErrorPage = () => {
  const styleClass = {
    back: {
      display: 'flex',
      bgcolor: 'background.default',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
    },
    form: {
      display: 'grid',
      p: 5,
      gridAutoColumns: 'minmax(400px, auto)',
      gap: 2,
      textAlign: 'center',
    },
    button: {
      textTransform: 'none',
      //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
  };

  return (
    <Box container sx={styleClass.back}>
      <Box sx={styleClass.form}>
        <>
          <Typography variant="h3">404</Typography>
          <Typography variant="h4">Page not found.</Typography>
          <Typography variant="h5">
            The page you are looking for might have been removed.
          </Typography>
        </>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="contained" size="large" sx={styleClass.button}>
            {'Return to website'}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ErrorPage;
