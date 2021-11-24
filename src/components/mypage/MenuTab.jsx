import React from 'react';
import { keyIconSrc } from '../../lib/assets/keyIcon.js';
import { bombIconSrc } from '../../lib/assets/bombIcon.js';
import { ReactComponent as LeftArrowIcon } from '../../lib/assets/leftArrowIcon.svg';
import { exitIconSrc } from '../../lib/assets/exitIcon.js';
import styled, { css } from 'styled-components';

const StyledMenuTab = styled.div`
  position: fixed;
  right: -340px;
  top: 0px;
  height: 100vh;
  width: 340px;
  background-color: #ffffff;
  z-index: 100;
  display: flex;
  flex-direction: column;
`;

const StyledMenuTitle = styled.div`
  padding: 34px 24px 34px 20px;
  font-family: NanumGothic;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ exit }) =>
    exit &&
    css`
      padding: 20px;
      border-top: 2px solid #cacaca;
      margin-top: auto;
    `}
`;

const StyledMenuButton = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 14px;
  border-radius: 20px 0px 0px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  background-color: ${(props) =>
    props.selected ? props.theme.brand[5] : 'white'};
  padding: 24px;
  box-sizing: border-box;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.brand[5]};
  }
  &:active {
    background-color: ${(props) => props.theme.brand[4]};
  }
`;

const StyledMenuTypo = styled.div`
  font-family: Apple SD Gothic Neo;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 24px;
`;

const MenuButton = ({ children }) => {
  return <StyledMenuButton>{children}</StyledMenuButton>;
};

const Icon = styled.div`
  width: ${(props) => props.size || 20}px;
  height: ${(props) => props.size || 20}px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
`;

const MenuTab = ({ id, pageState }) => {
  return (
    <StyledMenuTab>
      <StyledMenuTitle>
        <LeftArrowIcon id="leftIcon" />
        <div> ${id}님의 페이지</div>
      </StyledMenuTitle>
      <div style={{ marginBottom: 'auto', flex: 1 }}>
        <MenuButton pageState={pageState.changePassword}>
          <Icon src={keyIconSrc} />
          <StyledMenuTypo>비밀번호 수정</StyledMenuTypo>
        </MenuButton>
        <MenuButton pageState={pageState.withDrawal}>
          <Icon src={bombIconSrc} />
          <StyledMenuTypo>회원 탈퇴</StyledMenuTypo>
        </MenuButton>
      </div>
      <StyledMenuTitle exit>
        <div>로그아웃</div>
        <Icon src={exitIconSrc} size={35} />
      </StyledMenuTitle>
    </StyledMenuTab>
  );
};

export default MenuTab;
