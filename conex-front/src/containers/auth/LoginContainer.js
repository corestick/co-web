import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeField, initializeForm, login } from '../../stores/auth/auth';
import LoginForm from '../../components/auth/LoginForm';
import { check } from '../../stores/auth/user';
import UtilContainer from '../common/UtilContainer';
import crypto from 'crypto-browserify';

const LoginContainer = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { employeeCode, password } = form;

    const pwd = crypto.createHash('md5').update(password).digest('hex');

    dispatch(
      login({ masterSite: global.masterSite, employeeCode, password: pwd }),
    );
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      const menuAuth = JSON.parse(localStorage.getItem('menuAuth'));
      if (!menuAuth) {
        localStorage.setItem(
          'menuAuth',
          JSON.stringify({
            ...menuAuth,
            useLotNo: user.lotYes === 1,
          }),
        );
      }

      navigate('/main');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [user, navigate, dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류발생');
      console.log(authError);
      setError('로그인 실패');
      return;
    }

    if (auth) {
      console.log('로그인 성공');
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  return (
    <>
      <LoginForm
        type="login"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
      />
      <UtilContainer />
    </>
  );
};

export default LoginContainer;
