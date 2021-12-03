import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Snackbars = ({ alert, onCloseAlert }) => {
  const onClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    onCloseAlert();
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={alert.visible} autoHideDuration={3000} onClose={onClose}>
        <Alert
          onClose={onCloseAlert}
          severity={alert.type}
          sx={{ width: '100%' }}
        >
          {alert.msg}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Snackbars;
