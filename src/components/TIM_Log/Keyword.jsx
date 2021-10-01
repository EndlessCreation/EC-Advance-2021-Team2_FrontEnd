import React from 'react';
import styled from 'styled-components';

const StyledKeyword = styled.div`
  background-color: ${(props) => props.theme.grey[2]};
  color: ${(props) => props.theme.font[1]};
  border-radius: 0px 8px 8px 0px;
  font-weight: bold;
  padding: 11px 15px;
  margin-left: 3px;
`;

const Keyword = ({ keyword_text }) => {
  return (
    <>
      <StyledKeyword>@{keyword_text}</StyledKeyword>
    </>
  );
};

export default Keyword;
