import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import ThemeModeContainer from '../../containers/common/ThemeModeContainer';

const textMap = {
  login: '로그인',
};

const LoginForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
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
      bgcolor: 'background.paper',
      gridAutoColumns: 'minmax(400px, auto)',
      gap: 2,
      borderRadius: '10px',
      boxShadow: '6',
    },
    button: {
      textTransform: 'none',
      //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
  };

  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Box sx={styleClass.back}>
      <form onSubmit={onSubmit}>
        <Box container sx={styleClass.form}>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            {text}
          </Typography>
          <TextField
            autoComplete="employeeCode"
            name="employeeCode"
            variant="standard"
            label="ID"
            //helperText="Please enter your id"
            //autoFocus
            focused
            //fullWidth
            required
            onChange={onChange}
            value={form.employeeCode}
          />
          <TextField
            autoComplete="password"
            name="password"
            variant="standard"
            label="Password"
            //helperText="Please enter your password"
            focused
            //fullWidth
            required
            type={values.showPassword ? 'text' : 'password'}
            onChange={onChange}
            value={form.password}
            InputProps={{
              endAdornment: (
                <>
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                </>
              ),
            }}
          />
          <Button
            type="submit"
            //variant="outlined"
            variant="contained"
            size="large"
            //fullWidth
            sx={styleClass.button}
          >
            {text}
          </Button>
        </Box>
      </form>

      <ThemeModeContainer />
    </Box>
  );
};

export default LoginForm;
