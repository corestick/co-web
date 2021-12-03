import React from 'react';

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const ThemeModeSwitch = ({ darkMode, onChange }) => {
  return (
    <Box
      //icon={<Visibility isChecked={false} />}
      //checkedIcon={<VisibilityOff isChecked={true} />}
      sx={{
        position: 'absolute',
        bottom: 20,
        right: 20,
      }}
    >
      <Switch checked={darkMode} onChange={onChange} />
    </Box>
  );
};

export default ThemeModeSwitch;
