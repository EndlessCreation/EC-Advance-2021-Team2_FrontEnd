import React from 'react';
import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';
import {
  Input,
  InputForm,
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

const ChagePassWord = ({
  tabState,
  pageState,
  inputs,
  onChangeInputs,
  onSubmit,
  passwordCheck,
  onCheckSamePassword,
  currentState,
  sameState,
}) => {
  if (!pageState) return null;
  if (pageState) {
    console.log(inputs);
    return (
      <ChangePasswordWrapper>
        <MypageForm tabState={tabState}>
          <InputTitle main>비밀번호 찾기</InputTitle>
          <InputForm>
            <InputTitle>현재 비밀번호</InputTitle>
            <Input
              id="current"
              type="password"
              value={inputs.current}
              onChange={(e) => onChangeInputs(e)}
            />
          </InputForm>
          <InputForm>
            <InputTitle>새 비밀번호</InputTitle>
            <Input
              id="new"
              type="password"
              value={inputs.new}
              onChange={(e) => {
                onChangeInputs(e);
              }}
              onKeyUp={(e) => {
                onCheckSamePassword();
              }}
            />
          </InputForm>
          <InputForm>
            <InputTitle>새 비밀번호 확인</InputTitle>
            <Input
              id="check"
              type="password"
              value={inputs.check}
              onChange={(e) => onChangeInputs(e)}
              onKeyUp={(e) => {
                onCheckSamePassword();
              }}
            />

            {inputs.new !== '' &&
              inputs.check !== '' &&
              (sameState ? (
                <SameCheckMessage sameState={sameState}>
                  비밀번호가 일치합니다
                </SameCheckMessage>
              ) : (
                <SameCheckMessage sameState={sameState}>
                  비밀번호가 불일치합니다
                </SameCheckMessage>
              ))}
          </InputForm>
          <SubmitButton
            style={{ marginTop: '20px' }}
            onClick={() =>
              onSubmit({
                existing_password: inputs.current,
                new_password: inputs.new,
                check_password: inputs.check,
              })
            }
            passwordCheck={passwordCheck}
          >
            수정하기
          </SubmitButton>
        </MypageForm>
      </ChangePasswordWrapper>
    );
  }
};
export default ChagePassWord;

const ChangePasswordWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  animation: ${boxFade} 0.5s ease-in-out;
`;

const SameCheckMessage = styled.div`
  position: absolute;
  top: 36px;
  right: 6px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: ${({ sameState }) => (sameState ? '#138700' : '#E70000')};
`;
