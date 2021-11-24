import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import {
  Input,
  InputTitle,
  MypageForm,
  SubmitButton,
} from '../../styles/utilStyle';

const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const WithDrawal = ({ pageState, tabState }) => {
  if (!pageState) return null;
  if (pageState) {
    return (
      <WithDrawalWrapper>
        <MypageForm tabState={tabState}>
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
            center
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
        </MypageForm>
      </WithDrawalWrapper>
    );
  }
};
export default WithDrawal;

const WithDrawalWrapper = styled.div`
  width: 100%;
  height: 100%;

  background-color: #ffffff;
  animation: ${boxFade} 0.5s ease-in-out;
`;
