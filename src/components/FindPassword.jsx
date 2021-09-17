import React, { useState } from 'react';
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
const SendButton = styled.button`
  width: 59px;
  height: 65px;
  background: #3A980E;
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 10px;
  line-height: 28px;
  color: #ffffff; 
  cursor: pointer;
  margin-top: -90px;
  margin-left: 410px;
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

const FindPassword = ({ userId,
  onFindPassword,
  onUpdatePassword,
  onSendEmail
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
    onSendEmail({account, email, phone_number});
  };

  const handleUpdatePassword = () => {
    if(newPassword===newPasswordCheck){
      onUpdatePassword(newPassword);
      setPwdError(false);
    }
    else{
      setPwdError(true);
    }
  };

  return (
    <FindAuthWrapper>
      <FindAuthForm>
        <Title>비밀번호 찾기</Title>
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
              {pwdErrpr && "비밀번호가 다릅니다"}
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
                onChange={(e) => {
                  setAccount(e.target.value);
                }}
              />
            </InputForm>
            <InputForm>
              <InputTitle>휴대전화 번호</InputTitle>
              <Input
                value={phone_number}
                onChange={(e) => {
                  setPhone_number(e.target.value);
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
            <SendButton onClick={handleSendEmail}>비밀번호 발급</SendButton>
            <FindButton onClick={handleFindPassword}>비밀번호 찾기</FindButton>
          </>
        )}
      </FindAuthForm>
    </FindAuthWrapper>
  );
};

export default FindPassword;
