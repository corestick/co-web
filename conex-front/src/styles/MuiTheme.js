import {
  teal,
  green,
  red,
  grey,
  lightBlue,
  common,
} from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const custmomTheme = (darkMode) => {
  return createTheme(darkMode ? darkTheme : lightTheme);
};

const lightTheme = {
  palette: {
    mode: 'light',
    primary: {
      main: teal[800],
    },
    secondary: {
      main: green[800],
    },
    error: {
      main: red[700],
    },
    info: {
      main: teal[700],
    },
    text: {
      primary: grey[900],
      secondary: grey[600],
      disabled: grey[400],
    },
  },

  typography: {
    fontFamily: 'Montserrat',
  },
};

const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: lightBlue[700],
    },
    secondary: {
      main: green[800],
    },
    error: {
      main: red[700],
    },
    info: {
      main: lightBlue[700],
    },
    background: {
      default: '#1B2635',
      paper: '#233044',
    },
  },
  typography: {
    allVariants: {
      color: common.white,
      //verticalAlign: 'middle',
      //alignItems: 'center',
      //textAlign: 'center',
    },
    fontFamily: 'Montserrat',
  },
};

export default custmomTheme;
