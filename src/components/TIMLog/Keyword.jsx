import React from 'react';
import styled from 'styled-components';

const StyledKeyword = styled.div`
  background-color: ${(props) => {
    return props.theme.component[props.keywordColor][2] || 'white';
  }};
  color: ${(props) => props.theme.font[1]};
  border-radius: 0px 8px 8px 0px;
  font-weight: bold;
  padding: 11px 15px;
  margin-left: 3px;
`;

const Keyword = ({ keyword_color, keyword }) => {
  return (
    <>
      <StyledKeyword keywordColor={keyword_color}>@{keyword}</StyledKeyword>
    </>
  );
};

export default Keyword;
