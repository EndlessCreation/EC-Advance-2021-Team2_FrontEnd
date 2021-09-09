import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  ErrorMessage,
  FormWrapper,
  Input,
  InputName,
} from '../styles/utilStyle';

const DuplicateError = ({ error, value, click }) => {
  if (!click || !value) return null;
  return (
    <ErrorMessage>
      {error === false ? '이미 사용중 입니다.' : '사용 가능합니다.'}
    </ErrorMessage>
  );
};

const SignupComponent = ({
  form,
  emailChecked,
  nicknameChecked,
  accountChecked,
  onChange,
  onSubmit,
  onCheckEmail,
  onCheckNickname,
  onCheckAccount,
  error,
}) => {
  const [emailClick, setEmailClick] = useState(false);
  const [accoutClick, setAccoutClick] = useState(false);
  const [nicknameClick, setNicknameClick] = useState(false);

  useEffect(() => {
    if (form.email === '') {
      setEmailClick(false);
    }
  }, [form.email]);
  useEffect(() => {
    if (form.account === '') {
      setAccoutClick(false);
    }
  }, [form.account]);
  useEffect(() => {
    if (form.nickname === '') {
      setNicknameClick(false);
    }
  }, [form.nickname]);

  const handleCheckEmail = (e) => {
    e.preventDefault();
    if (form.email === '') {
      return;
    }
    onCheckEmail(e);
    setEmailClick(true);
  };
  const handleCheckAccount = (e) => {
    e.preventDefault();
    if (form.account === '') {
      return;
    }
    onCheckAccount(e);
    setAccoutClick(true);
  };
  const handleCheckNickname = (e) => {
    e.preventDefault();
    if (form.nickname === '') {
      return;
    }
    onCheckNickname(e);
    setNicknameClick(true);
  };
  return (
    <SignupFormWrapper>
      <h1>Sign Up</h1>
      <SignupForm onSubmit={onSubmit}>
        <InputWrapper>
          <InputName>이름</InputName>
          <Input
            name="name"
            placeholder="name"
            type="text"
            onChange={onChange}
            value={form.name}
          />
        </InputWrapper>

        <InputWrapper>
          <InputName>아이디</InputName>
          <Input
            name="account"
            placeholder="account"
            type="text"
            onChange={onChange}
            value={form.account}
          />
          <button onClick={handleCheckAccount}>Check</button>
          <DuplicateError
            error={accountChecked}
            value={form.account}
            click={accoutClick}
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>아이디</InputName>
          <Input
            name="nickname"
            placeholder="nickname"
            type="text"
            onChange={onChange}
            value={form.nickname}
          />
          <button onClick={handleCheckNickname}>Check</button>
          <DuplicateError
            error={nicknameChecked}
            value={form.nickname}
            click={nicknameClick}
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>아이디</InputName>
          <Input
            name="password"
            placeholder="password"
            type="password"
            onChange={onChange}
            value={form.password}
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>아이디</InputName>
          <Input
            name="passwordConfirm"
            placeholder="passwordConfirm"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        </InputWrapper>

        <InputWrapper>
          <InputName>이메일</InputName>
          <Input
            name="email"
            placeholder="example@domain.com"
            type="email"
            onChange={onChange}
            value={form.email}
          />
          <CheckButton onClick={handleCheckEmail}>check</CheckButton>
          <DuplicateError
            error={emailChecked}
            value={form.email}
            click={emailClick}
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>이메일</InputName>
          <Input
            name="phone_number"
            placeholder="ex) 01012345678"
            type="text"
            onChange={onChange}
            value={form.phone_number}
          />
        </InputWrapper>

        <button>Sign Up</button>
      </SignupForm>
      <div>{error && <ErrorMessage>{error}</ErrorMessage>}</div>
      {/* <footer>
        <Link to="/login">로그인</Link>
      </footer> */}
    </SignupFormWrapper>
  );
};

const SignupFormWrapper = styled(FormWrapper)`
  grid-template-rows: 1fr 5fr repeat(3, 1fr);
`;
const SignupForm = styled.form`
  display: grid;
  width: 70%;
  height: 80%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 1fr) 0.5fr;
  justify-items: center;
`;
const InputWrapper = styled.div`
  display: grid;
  height: 100px;
`;
const CheckButton = styled.button``;
export default SignupComponent;
