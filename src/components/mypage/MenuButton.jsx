import React from 'react';
import styled from 'styled-components';
// import { MdAccountCircle } from 'react-icons/md';
import { HiViewList } from 'react-icons/hi';
const MenuButton = ({ onTabStateChange }) => {
  return (
    <StyledMenuButton
      onClick={() => {
        onTabStateChange();
      }}
    >
      <StyledIconContainer>
        <HiViewList style={iconStyle} />
      </StyledIconContainer>
    </StyledMenuButton>
  );
};

const iconStyle = {
  height: '25px',
  width: '25px',
};

const StyledIconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMenuButton = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 80px;
  height: 60px;
  background-color: #ffffff;

  z-index: 100;
`;
export default MenuButton;
