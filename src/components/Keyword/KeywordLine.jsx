import React from 'react';
import styled from 'styled-components';
import KeywordHead from './KeywordHead';
import KeywordTail from './KeywordTail';

const StyledKeywordLineWrap = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 150px;
  overflow-y: scroll;
  overflow-x: hidden;
  & + & {
    margin-left: 66px;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
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
