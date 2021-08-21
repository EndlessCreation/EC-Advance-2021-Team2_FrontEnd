import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../components/AuthForm';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));
  const onChange = (e) => {
    const { value, name } = e.target;
  };
  return <AuthForm type="login" />;
};

export default LoginContainer;
