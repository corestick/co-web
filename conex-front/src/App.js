import './App.css';
import Routes from './routes';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import custmomTheme from './styles/MuiTheme';
import { changeThemeMode } from './stores/common/theme';

import dotenv from 'dotenv';
import init from './config/environment/Config';

dotenv.config();
init();

const App = () => {
  const { darkMode } = useSelector(({ theme }) => ({
    darkMode: theme.darkMode,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true' ? true : false;

    dispatch(changeThemeMode(darkMode));
  }, [dispatch]);

  return (
    <ThemeProvider theme={custmomTheme(darkMode)}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
