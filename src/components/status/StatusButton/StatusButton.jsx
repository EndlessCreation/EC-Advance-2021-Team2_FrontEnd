import React from 'react';
import styled, { css } from 'styled-components';
import { MdNavigateBefore } from 'react-icons/md';

const StyledWrapper = styled.div`
  width: 200px;
  height: 75px;
  border-radius: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  display: flex;
`;

const StyledStatusButton = styled.button`
  width: 95px;
  height: 75px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: none;
  border-radius: 100px 0 0 100px;
  background-color: #5da433; //Tim color 리팩토링 필요
  ${(props) =>
    props.right &&
    css`
      transform: rotate(180deg);
    `};
  & + & {
    margin-left: 10px;
  }
  &:hover {
    background-color: #447926;
  }
  &:active {
    background-color: #6fc53e;
  }
`;

const StyledIcon = styled.div`
  transform: translate(0px, 1.5px);
`;

const Button = ({ right }) => {
  return (
    <StyledStatusButton right={right} onClick={() => console.log('버튼클릭')}>
      <StyledIcon>
        <MdNavigateBefore size={24} />
      </StyledIcon>
    </StyledStatusButton>
  );
};

const StatusButton = (props) => {
  return (
    <StyledWrapper>
      <Button />
      <Button right={true} />
    </StyledWrapper>
  );
};

export default StatusButton;
