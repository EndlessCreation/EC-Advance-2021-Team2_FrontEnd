import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginComponent from '../components/LoginComponent';
import { changeField, initializeForm, login, logout } from '../modules/auth';

const LoginContainer = () => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
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
  const onSubmit = async (e) => {
    e.preventDefault();
    const { account, password } = form;

    dispatch(login({ account, password }));
  };
  const onLoggout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <LoginComponent
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      onLoggout={onLoggout}
      error={error}
    />
  );
};

export default LoginContainer;
