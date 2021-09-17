import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const FindAuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fffef9;
`;

const FindAuthForm = styled.div`
  width: 648px;
  height: 648px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 91px 96px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin: 0 0 36px 0;
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

const Input = styled.input`
  width: 100%;
  height: 59px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: 0;
  font-family: Roboto;
  font-size: 20px;
  line-height: 23px;
`;

const FindButton = styled.button`
  width: 200px;
  height: 48px;
  background: #3A980E;
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  cursor: pointer;
  margin-top: 18.71px;
`;

const FindId = ({ onFindId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleFindId = () => {
    onFindId({ name, email });
  };

  return (
    <FindAuthWrapper>
      <FindAuthForm>
        <Title>아이디 찾기</Title>
        <InputForm>
          <InputTitle>이름</InputTitle>
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </InputForm>
        <InputForm>
          <InputTitle>이메일</InputTitle>
          <Input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </InputForm>
        <FindButton onClick={handleFindId}>아이디 찾기</FindButton>
      </FindAuthForm>
    </FindAuthWrapper>
  );
};

export default FindId;
