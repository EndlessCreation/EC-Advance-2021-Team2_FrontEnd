import React from 'react';
import styled, { css } from 'styled-components';
import {
  Input,
  InputForm,
  InputTitle,
  SubmitButton,
} from '../../styles/utilStyle';

const ChagePassWord = (props) => {
  return (
    <ChangePasswordWrapper>
      <ChangePasswordForm>
        <InputTitle main>비밀번호 찾기</InputTitle>
        <InputForm>
          <InputTitle>현재 비밀번호</InputTitle>
          <Input
          // type="password"
          // value={newPassword}
          // onChange={(e) => {
          //   setNewPassword(e.target.value);
          // }}
          />
        </InputForm>
        <InputForm>
          <InputTitle>새 비밀번호</InputTitle>
          <Input
          // type="password"
          // value={newPassword}
          // onChange={(e) => {
          //   setNewPassword(e.target.value);
          // }}
          />
        </InputForm>
        <InputForm>
          <InputTitle>새 비밀번호 확인</InputTitle>
          <Input
          // type="password"
          // value={newPasswordCheck}
          // onChange={(e) => {
          //   setNewPasswordCheck(e.target.value);
          // }}
          />
        </InputForm>
        <SubmitButton
          style={{ marginTop: '20px' }}
          // onClick={handleUpdatePassword}
        >
          수정하기
        </SubmitButton>
      </ChangePasswordForm>
    </ChangePasswordWrapper>
  );
};
export default ChagePassWord;

const ChangePasswordWrapper = styled.div`
  position: fixed;
  width: 50%;
  height: 50%;
  transform: translate(50%, 50%);
  background-color: #ffffff;
`;

const ChangePasswordForm = styled.div`
  min-height: 300px;
  min-width: 400px;
  padding: 50px 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
