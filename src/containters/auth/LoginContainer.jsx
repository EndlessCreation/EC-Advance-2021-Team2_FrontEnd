import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginComponent from '../../components/LoginComponent';
import { changeField, initAuth, login } from '../../modules/auth';
import { check } from '../../modules/user';
const LoginContainer = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
  }));
  const { user } = useSelector(({ user }) => ({ user: user.user }));
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

  // useEffect(() => {
  //   return () => {
  //     dispatch(initAuth());
  //   };
  // }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log(authError);
      setError('로그인에 실패하였습니다.');
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      console.log(auth);
      dispatch(check(auth.id));
    }
  }, [authError, auth, dispatch]);
  useEffect(() => {
    if (user) {
      console.log(user);
      history.push('/');
    }
  }, [user, history]);
  return (
    <LoginComponent
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default LoginContainer;
