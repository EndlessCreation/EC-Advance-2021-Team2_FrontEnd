import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import SignupComponent from '../../components/SignupComponent';
import {
  changeField,
  checkAccount,
  checkEmail,
  checkNickname,
  initAuth,
  signup,
} from '../../modules/auth';

const SignupContainer = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const {
    form,
    emailChecked,
    nicknameChecked,
    accountChecked,
    auth,
    authError,
  } = useSelector(({ auth }) => ({
    form: auth.signup,
    emailChecked: auth.emailChecked,
    nicknameChecked: auth.nicknameChecked,
    accountChecked: auth.accountChecked,
    auth: auth.auth,
    authError: auth.authError,
  }));
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'signup',
        key: name,
        value,
      }),
    );
  };
  const onCheckEmail = (e) => {
    dispatch(checkEmail(form.email));
  };

  const onCheckNickname = (e) => {
    dispatch(checkNickname(form.nickname));
  };

  const onCheckAccount = (e) => {
    dispatch(checkAccount(form.account));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      email,
      name,
      nickname,
      password,
      passwordConfirm,
      account,
      phone_number,
    } = form;
    if (
      [
        email,
        name,
        nickname,
        password,
        passwordConfirm,
        account,
        phone_number,
      ].includes('')
    ) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      changeField({ form: 'signup', key: 'password', value: '' });
      changeField({ form: 'signup', key: 'passwordConfirm', value: '' });
      return;
    }
    dispatch(
      signup({
        email,
        password,
        name,
        nickname,
        account,
        phone_number,
      }),
    );
  };
  useEffect(() => {
    return () => {
      dispatch(initAuth());
    };
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log(authError);
      setError('중복 체크를 해주세요.');
      return;
    }
    if (auth) {
      console.log('Success!');
      console.log(auth);
      history.push('/');
    }
  }, [auth, authError, history]);

  return (
    <SignupComponent
      type="signup"
      form={form}
      emailChecked={emailChecked}
      nicknameChecked={nicknameChecked}
      accountChecked={accountChecked}
      onChange={onChange}
      onSubmit={onSubmit}
      onCheckEmail={onCheckEmail}
      onCheckNickname={onCheckNickname}
      onCheckAccount={onCheckAccount}
      error={error}
    />
  );
};

export default withRouter(SignupContainer);
