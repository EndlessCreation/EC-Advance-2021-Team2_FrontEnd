import React from 'react';
import styled from 'styled-components';

const StyledStatusWrapper = styled.div`
  width: 1080px;
  height: 400px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 80px 40px 15px 40px;
`;

const StatusWrapper = ({ children }) => {
  return (
    <>
      <StyledStatusWrapper>{children}</StyledStatusWrapper>
    </>
  );
};
export default StatusWrapper;
