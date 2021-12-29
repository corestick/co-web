import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Menu from '../../components/common/Menu';
import { logout } from '../../stores/auth/user';
import { initializeAuth } from '../../stores/auth/auth';
import UtilContainer from './UtilContainer';

const HeaderContainer = ({ title }) => {
  const { auth, user } = useSelector(({ auth, user }) => ({
    auth: auth.auth,
    user: user.user,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const onLogout = () => {
    dispatch(logout());
  };

  const openMenu = (e) => {
    setMenuOpen(true);
  };

  const closeMenu = (e) => {
    setMenuOpen(false);
  };

  const menuClick = (e, menu) => {
    if (menu.text === '로그아웃') {
      onLogout();
    } else {
      navigate(menu.path);
    }

    closeMenu();
  };

  useEffect(() => {
    if (!user && auth) {
      dispatch(initializeAuth());
    } else if (!auth && !user) {
      navigate('/');
    }
  }, [navigate, auth, user, dispatch]);

  return (
    <>
      <Header openMenu={openMenu} onLogout={onLogout} title={title} />
      <Menu menuOpen={menuOpen} closeMenu={closeMenu} menuClick={menuClick} />
      <UtilContainer />
    </>
  );
};

export default HeaderContainer;
