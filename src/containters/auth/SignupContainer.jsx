import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import SignupComponent from '../../components/auth/SignupComponent';
import {
  changeField,
  checkAccount,
  checkEmail,
  checkNickname,
  initializeForm,
  signup,
} from '../../modules/auth';

const SignupContainer = () => {
  const [emailClick, setEmailClick] = useState(false);
  const [accountClick, setAccountClick] = useState(false);
  const [nicknameClick, setNicknameClick] = useState(false);
  const [error, setError] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();
  const {
    form,
    emailChecked,
    nicknameChecked,
    accountChecked,
    auth,
    authError,
    signupSuccess,
  } = useSelector(({ auth, user }) => ({
    form: auth.signup,
    emailChecked: auth.emailChecked,
    nicknameChecked: auth.nicknameChecked,
    accountChecked: auth.accountChecked,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
    signupSuccess: auth.signup.signupSuccess,
  }));
  const {
    email,
    name,
    nickname,
    password,
    passwordConfirm,
    account,
    phone_number,
  } = form;
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'signup',
        key: name,
        value,
      }),
    );
    if (value === '') {
      if (name === 'email') setEmailClick(false);
      else if (name === 'nickname') setNicknameClick(false);
      else if (name === 'account') setAccountClick(false);
    }
  };
  const onCheckEmail = (e) => {
    e.preventDefault();
    if (email === '') return;
    setEmailClick(true);
    dispatch(checkEmail(email));
  };

  const onCheckNickname = (e) => {
    e.preventDefault();
    if (nickname === '') return;
    setNicknameClick(true);
    dispatch(checkNickname(nickname));
  };

  const onCheckAccount = (e) => {
    e.preventDefault();
    if (account === '') return;
    setAccountClick(true);
    dispatch(checkAccount(account));
  };

  const onSubmit = (e) => {
    e.preventDefault();
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
      setError('??? ?????? ?????? ???????????????.');
      return;
    }
    if (!emailClick || !nicknameClick || !accountClick) {
      setError('?????? ????????? ????????????.');
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
    if (authError) {
      console.log(authError);
      setError('??????????????? ?????????????????????.');
      return;
    }
    if (signupSuccess) {
      console.log(signupSuccess);
      console.log('Success!');
      alert('????????? ???????????? ?????????????????????');
      history.push('/');
    }
    return () => {
      dispatch(initializeForm('signup'));
      setError('');
    };
  }, [auth, authError, history, dispatch, signupSuccess]);
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
      emailClick={emailClick}
      accountClick={accountClick}
      nicknameClick={nicknameClick}
    />
  );
};

export default withRouter(SignupContainer);
