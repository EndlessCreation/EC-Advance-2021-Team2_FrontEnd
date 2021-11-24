import React from 'react';
import styled, { css } from 'styled-components';
import {
  Input,
  InputForm,
  InputTitle,
  SubmitButton,
} from '../../styles/utilStyle';

const WithDrawal = (props) => {
  return (
    <WithDrawalWrapper>
      <WithDrawalForm>
        <InputTitle main>회원 탈퇴</InputTitle>
        <InputTitle
          main
          style={{ textAlign: 'center', margin: '100px 0px 70px 0px' }}
        >
          TIM 프로젝트 페이지에서 탈퇴하시겠습니까? <br />
          탈퇴 시 저장된 TIM은 영구 삭제됩니다.
        </InputTitle>

        <Input
          placeholder={`"회원 탈퇴하기"를 입력하시고 탈퇴하기 버튼을 누르면 회원탈퇴가 완료됩니다`}
          // type="password"
          // value={newPasswordCheck}
          // onChange={(e) => {
          //   setNewPasswordCheck(e.target.value);
          // }}
        />
        <SubmitButton
          style={{ marginTop: '60px' }}
          // onClick={handleUpdatePassword}
        >
          탈퇴하기
        </SubmitButton>
      </WithDrawalForm>
    </WithDrawalWrapper>
  );
};
export default WithDrawal;

const WithDrawalWrapper = styled.div`
  position: fixed;
  width: 50%;
  height: 50%;
  transform: translate(50%, 50%);
  background-color: #ffffff;
`;

const WithDrawalForm = styled.div`
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
