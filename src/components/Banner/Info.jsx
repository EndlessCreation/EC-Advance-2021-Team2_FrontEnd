import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  font-size: 32px;
  font-weight: bold;
  line-height: 34px;
  text-align: end;
`;

const Info = ({ info, children }) => {
  const { tag, keyword, date } = info;
  return (
    <StyledInfo>
      #{tag}
      <br />@{keyword}
      <br />
      {date}
    </StyledInfo>
  );
};
export default Info;
