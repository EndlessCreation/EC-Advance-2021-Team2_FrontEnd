import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from '../../styles/utilStyle';

const FindId = ({ onFindId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleFindId = () => {
    onFindId({ name, email });
  };

  return (
    <FindAuthWrapper>
      <FindAuthForm>
        <h1>아이디 찾기</h1>
        <InputForm>
          <InputTitle>이름</InputTitle>
          <Input
            value={name}
            placeholder="이름"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </InputForm>
        <InputForm>
          <InputTitle>이메일</InputTitle>
          <Input
            value={email}
            type="email"
            placeholder="example@domain.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </InputForm>
        <FindButton onClick={handleFindId}>아이디 찾기</FindButton>
        <StyledLink to="/login">로그인 하기</StyledLink>
      </FindAuthForm>
    </FindAuthWrapper>
  );
};

const FindAuthWrapper = styled.div`
  height: 300px;
  width: 450px;
  padding: 50px 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #ffffff;
  @media ${(props) => props.theme.mobile} {
    background-color: ${(props) => props.theme.bgColor};
    box-shadow: none;
    width: 100%;
  }
`;

const FindAuthForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 0 30px;
  & > h1 {
    margin: 0;
  }
`;

const InputForm = styled.div`
  width: 100%;
  margin-bottom: 26.59px;
`;

const InputTitle = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  margin: 0;
`;

const FindButton = styled.button`
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
  margin-bottom: 18.71px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: gray;
`;
export default FindId;
