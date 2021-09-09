import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  ErrorMessage,
  FormWrapper,
  Input,
  InputName,
  InputWrapper,
} from '../styles/utilStyle';

const LoginComponent = ({ form, onChange, onSubmit, error }) => {
  return (
    <LoginFormWrapper>
      <h1>Login</h1>
      <StyledLink to="/signup">회원이 아니신가요?</StyledLink>
      <LoginForm onSubmit={onSubmit}>
        <InputWrapper>
          <InputName>아이디</InputName>
          <Input
            name="account"
            placeholder="아이디"
            type="text"
            onChange={onChange}
            value={form.account}
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>비밀번호</InputName>
          <Input
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
            value={form.password}
          />
        </InputWrapper>
        <Button>Login</Button>
      </LoginForm>
      <div>{error && <ErrorMessage>{error}</ErrorMessage>}</div>
      <Footer>
        <span>간편가입을 하시겠습니까?</span>
        <ul>
          <li>google</li>
          <li>kakao</li>
          <li>naver</li>
        </ul>
      </Footer>
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled(FormWrapper)`
  grid-template-rows: 1fr 1fr 4fr 0.5fr 3fr;
`;
const LoginForm = styled.form`
  display: grid;
  width: 70%;
  height: 80%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 0.5fr;
  justify-items: center;
`;
const Button = styled.button`
  font-size: 18px;
  background-color: #2be828;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  width: 80%;
  padding: 5px;
  margin: 10px;
  &:hover {
    background-color: #1ccc1a;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: gray;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & > span {
    color: gray;
  }
  & > ul {
    display: grid;
    justify-content: center;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 0.5rem;
    padding: 0;
    & > li {
      list-style-type: none;
    }
  }
`;
export default LoginComponent;
