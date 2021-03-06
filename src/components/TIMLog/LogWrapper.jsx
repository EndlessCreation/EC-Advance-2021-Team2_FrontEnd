import React from 'react';
import styled from 'styled-components';

const StyledLogWrapper = styled.div`
  width: 1000px;
  height: 48px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #878787;
  background-color: #ffffff;
  font-size: 20px;
  display: flex;
  margin-bottom: 10px;
`;

const LogWrapper = ({ children }) => {
  return <StyledLogWrapper>{children}</StyledLogWrapper>;
};

export default LogWrapper;
