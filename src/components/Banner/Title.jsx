import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  font-size: 50px;
  line-height: 50px;
  font-weight: bold;
  max-width: 852px;
  max-height: 150px;
  backdrop-filter: blur(10px);
  overflow: hidden;
  margin: auto;
`;

// const Whitemark = styled.div`
//   background-color: rgba(200, 200, 200, 0.3);
//   margin: auto;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   display: flex;
// `;

const Title = ({ log, children }) => {
  return (
    // <Whitemark>
    <StyledTitle>{log}</StyledTitle>
    // </Whitemark>
  );
};
export default Title;
