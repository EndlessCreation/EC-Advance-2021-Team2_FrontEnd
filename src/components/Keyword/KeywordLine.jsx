import React from 'react';
import styled from 'styled-components';
import KeywordHead from './KeywordHead';
import KeywordTail from './KeywordTail';

const StyledKeywordLineWrap = styled.div`
  height: 100%;
  width: 150px;
  overflow: scroll;
`;

const StyledKeywordTailWrap = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-top: 15px;
  flex-direction: column;
  position: static;
  align-items: center;
`;
const KeywordLine = ({ keyword, timlist }) => {
  return (
    <StyledKeywordLineWrap>
      <KeywordHead keyword={keyword} />
      <StyledKeywordTailWrap>
        {timlist.map((tim) => (
          <KeywordTail tim={tim} />
        ))}
      </StyledKeywordTailWrap>
    </StyledKeywordLineWrap>
  );
};

export default KeywordLine;
