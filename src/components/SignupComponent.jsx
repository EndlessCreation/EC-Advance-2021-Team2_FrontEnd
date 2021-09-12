import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ErrorMessage, FormWrapper, Input } from '../styles/utilStyle';

const DuplicateError = ({ error, value, click }) => {
  if (!click || !value) return null;
  return (
    <CheckMessage error={error}>
      {error === false ? '🚫 이미 사용중 입니다.' : '✅ 사용 가능합니다.'}
    </CheckMessage>
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
          <SignupInput
            name="name"
            placeholder="name"
            type="text"
            onChange={onChange}
            value={form.name}
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>아이디</InputName>
          <SignupInput
            name="account"
            placeholder="account"
            type="text"
            onChange={onChange}
            value={form.account}
          />
          <CheckButton onClick={handleCheckAccount}>Check</CheckButton>
          <DuplicateError
            error={accountChecked}
            value={form.account}
            click={accoutClick}
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>닉네임</InputName>
          <SignupInput
            name="nickname"
            placeholder="nickname"
            type="text"
            onChange={onChange}
            value={form.nickname}
          />
          <CheckButton onClick={handleCheckNickname}>Check</CheckButton>
          <DuplicateError
            error={nicknameChecked}
            value={form.nickname}
            click={nicknameClick}
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>비밀번호</InputName>
          <SignupInput
            name="password"
            placeholder="password"
            type="password"
            onChange={onChange}
            value={form.password}
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>비밀번호 확인</InputName>
          <SignupInput
            name="passwordConfirm"
            placeholder="passwordConfirm"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        </InputWrapper>

        <InputWrapper>
          <InputName>이메일</InputName>
          <SignupInput
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
          <InputName>휴대폰 번호</InputName>
          <SignupInput
            name="phone_number"
            placeholder="01012345678 (' - ' 제외)"
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
  grid-template-rows: 1fr 4fr 1fr;
`;
const SignupForm = styled.form`
  display: grid;
  width: 70%;
  height: 90%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 1fr) 0.5fr;
  overflow: scroll;
`;
const InputWrapper = styled.div`
  display: grid;
  height: 100px;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr);
`;
const InputName = styled.h4`
  margin: 0 10px;
  grid-row: 1/2;
  grid-column: 1/-1;
`;
const SignupInput = styled(Input)`
  grid-row: 2/4;
  grid-column: 1/4;
`;
const CheckButton = styled.button`
  margin: 10px;
  font-size: 1rem;
  border: 1px solid black;
  border-radius: 3px 3px;
  background-color: #ffffff;
  grid-row: 2/4;
  grid-column: 4/-1;
  &:hover {
    color: #ffffff;
    background-color: #000000;
  }
`;
const CheckMessage = styled.span`
  margin: 0 10px;
  font-size: 0.75rem;
  color: ${(props) => props.error === false && 'red'};
  grid-row: 4/-1;
  grid-column: 1/-1;
`;
export default SignupComponent;
