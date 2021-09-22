import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from '../../styles/utilStyle';

const FindPassword = ({
  userId,
  onFindPassword,
  onUpdatePassword,
  onSendEmail,
}) => {
  const [account, setAccount] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCheck, setNewPasswordCheck] = useState('');
  const [pwdErrpr, setPwdError] = useState(false);

  const handleFindPassword = () => {
    onFindPassword({ account, email, phone_number });
  };

  const handleSendEmail = () => {
    onSendEmail({ account, email, phone_number });
  };

  const handleUpdatePassword = () => {
    if (newPassword === newPasswordCheck) {
      onUpdatePassword(newPassword);
      setPwdError(false);
    } else {
      setPwdError(true);
    }
  };

  return (
    <FindAuthWrapper>
      <FindAuthForm>
        <h1>비밀번호 찾기</h1>
        {userId ? (
          <>
            <InputForm>
              <InputTitle>새 비밀번호</InputTitle>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </InputForm>
            <InputForm>
              <InputTitle>비밀번호 확인</InputTitle>
              <Input
                type="password"
                value={newPasswordCheck}
                onChange={(e) => {
                  setNewPasswordCheck(e.target.value);
                }}
              />
              {pwdErrpr && '비밀번호가 다릅니다'}
            </InputForm>
            <FindButton onClick={handleUpdatePassword}>
              비밀번호 수정
            </FindButton>{' '}
          </>
        ) : (
          <>
            <InputForm>
              <InputTitle>아이디</InputTitle>
              <Input
                value={account}
                placeholder="아이디"
                onChange={(e) => {
                  setAccount(e.target.value);
                }}
              />
            </InputForm>
            <InputForm>
              <InputTitle>휴대전화 번호</InputTitle>
              <Input
                value={phone_number}
                placeholder="01012345678 (' - ' 제외)"
                onChange={(e) => {
                  setPhone_number(e.target.value);
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
              <SendButton onClick={handleSendEmail}>비밀번호 발급</SendButton>
            </InputForm>
            <FindButton onClick={handleFindPassword}>비밀번호 찾기</FindButton>
          </>
        )}
      </FindAuthForm>
    </FindAuthWrapper>
  );
};
const FindAuthWrapper = styled.div`
  height: 500px;
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
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-self: center;
`;

const InputTitle = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  margin: 0;
`;
const SendButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50px;
  height: 40px;
  background: #3a980e;
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 0.5rem;
  color: #ffffff;
  cursor: pointer;
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
  margin-top: 18.71px;
`;

export default FindPassword;
