import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DuplicateError = ({ error, value, click }) => {
  if (!click || !value) return null;
  return (
    <CheckMessage error={error}>
      {error === false ? 'π« μ΄λ―Έ μ¬μ©μ€ μλλ€.' : 'β μ¬μ© κ°λ₯ν©λλ€.'}
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
  emailClick,
  accountClick,
  nicknameClick,
}) => {
  const [repasswordError, setRepasswordError] = useState(true);

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    onChange(e);
    if (form.passwordConfirm) {
      setRepasswordError(password === form.passwordConfirm);
    }
  };
  const handleRePasswordChange = (e) => {
    const passwordConfirm = e.target.value;
    onChange(e);
    setRepasswordError(form.password === passwordConfirm);
  };
  return (
    <SignupWrapper>
      <SignupFormWrapper>
        <LoginLink to="/login">μ΄λ―Έ νμμ΄μ κ°μ? λ‘κ·ΈμΈ νκΈ°</LoginLink>
        <h1>νμκ°μ</h1>
        <SignupForm onSubmit={onSubmit}>
          <InputWrapper>
            <InputName>μ΄λ¦</InputName>
            <Input
              name="name"
              placeholder="μ΄λ¦"
              type="text"
              onChange={onChange}
              value={form.name}
            />
          </InputWrapper>
          <InputWrapper>
            <InputName>μμ΄λ</InputName>
            <Input
              name="account"
              placeholder="μμ΄λ"
              type="text"
              onChange={onChange}
              value={form.account}
            />
            <CheckButton onClick={onCheckAccount}>Check</CheckButton>
            <DuplicateError
              error={accountChecked}
              value={form.account}
              click={accountClick}
            />
          </InputWrapper>
          <InputWrapper>
            <InputName>λλ€μ</InputName>
            <Input
              name="nickname"
              placeholder="λλ€μ"
              type="text"
              onChange={onChange}
              value={form.nickname}
            />
            <CheckButton onClick={onCheckNickname}>Check</CheckButton>
            <DuplicateError
              error={nicknameChecked}
              value={form.nickname}
              click={nicknameClick}
            />
          </InputWrapper>
          <InputWrapper>
            <InputName>λΉλ°λ²νΈ</InputName>
            <Input
              name="password"
              placeholder="λΉλ°λ²νΈ"
              type="password"
              onChange={handlePasswordChange}
              value={form.password}
            />
          </InputWrapper>
          <InputWrapper>
            <InputName>λΉλ°λ²νΈ νμΈ</InputName>
            <Input
              name="passwordConfirm"
              placeholder="λΉλ°λ²νΈ νμΈ"
              type="password"
              onChange={handleRePasswordChange}
              value={form.passwordConfirm}
            />
            <CheckMessage error={repasswordError}>
              {repasswordError === false && 'π« λΉλ°λ²νΈκ° μΌμΉνμ§ μμ΅λλ€.'}
            </CheckMessage>
          </InputWrapper>

          <InputWrapper>
            <InputName>μ΄λ©μΌ</InputName>
            <Input
              name="email"
              placeholder="example@domain.com"
              type="email"
              onChange={onChange}
              value={form.email}
            />
            <CheckButton onClick={onCheckEmail}>check</CheckButton>
            <DuplicateError
              error={emailChecked}
              value={form.email}
              click={emailClick}
            />
          </InputWrapper>
          <InputWrapper>
            <InputName>ν΄λν° λ²νΈ</InputName>
            <Input
              name="phone_number"
              placeholder="01012345678 (' - ' μ μΈ)"
              type="text"
              onChange={onChange}
              value={form.phone_number}
            />
          </InputWrapper>
          <Button>νμκ°μ νκΈ°</Button>
        </SignupForm>
        <div>{error && <ErrorMessage>{error}</ErrorMessage>}</div>
      </SignupFormWrapper>
    </SignupWrapper>
  );
};

const SignupWrapper = styled.div`
  height: 950px;
  width: 450px;
  padding: 50px 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #ffffff;
  @media ${(props) => props.theme.mobile} {
    background-color: ${(props) => props.theme.bgColor};
    box-shadow: none;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }
`;
const SignupFormWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.3fr 0.2fr 1fr 0.5fr;
  justify-items: center;
  align-items: center;
  height: 100%;
  padding: 0 30px;
  & > h1 {
    margin: 0;
  }
`;
const LoginLink = styled(Link)`
  border-radius: 20px;
  text-decoration: none;
  color: black;
  padding: 10px;
  &:hover {
    background-color: #e4e5e8;
    transition: background-color 200ms linear;
  }
`;
const SignupForm = styled.form`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 1fr) 0.5fr;
`;
const InputWrapper = styled.div`
  display: grid;
  height: 90px;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr);
`;
const InputName = styled.h4`
  margin: 0;
  grid-row: 1/2;
  grid-column: 1/-1;
  align-self: center;
`;

const Input = styled.input`
  grid-row: 2/4;
  grid-column: 1/4;
  align-self: center;
  width: 100%;
  height: 40px;
  padding: 0 15px;
  background: #fbfbfd;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 0;
  font-family: Roboto;
  font-size: 1rem;
  line-height: 1.25rem;
`;
const CheckButton = styled.button`
  cursor: pointer;
  margin: 10px;
  font-size: 1rem;
  border: 1px solid black;
  border-radius: 15px 15px;
  background-color: #ffffff;
  grid-row: 2/4;
  grid-column: 4/-1;
  &:hover {
    color: #ffffff;
    background-color: #000000;
    transition: background-color 200ms linear;
  }
`;
const CheckMessage = styled.span`
  margin: 0;
  font-size: 0.75rem;
  color: ${(props) => props.error === false && 'red'};
  grid-row: 4/-1;
  grid-column: 1/-1;
`;
const ErrorMessage = styled.span`
  display: block;
  margin: 10px 0;
  color: #e70000;
`;
const Button = styled.button`
  width: 100%;
  height: 40px;
  background: #3a980e;
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.75rem;
  color: #ffffff;
  cursor: pointer;
  margin-top: 18.71px;
`;
export default SignupComponent;
