import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginComponent from '../../components/auth/LoginComponent';
import { changeField, initializeForm, login } from '../../modules/auth';
import { check } from '../../modules/user';

const LoginContainer = ({ OAuthComponent }) => {
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

  useEffect(() => {
    if (authError) {
      console.log(authError);
      setError('다시 시도해주세요.');
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      dispatch(check());
    }
    return () => {
      dispatch(initializeForm('login'));
      setError('');
    };
  }, [authError, auth, dispatch]);

  useEffect(() => {
    if (user) history.push('/');
  }, [user, history]);
  return (
    <LoginComponent
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      OAuthComponent={OAuthComponent}
    />
  );
};

export default LoginContainer;
