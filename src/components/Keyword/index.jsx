import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import KeywordLine from './KeywordLine';
import TagMark from './TagMark';

const StyledKeywordStatus = styled.div`
  display: flex;
  margin: 35px 66px;
  justify-content: space-between;
  align-items: center;
`;
const StyledKeywordList = styled.div`
  position: relative;
  height: 100%;
  padding: 48px 60px;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  background-color: #ffffff;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Keyword = ({ timlist }) => {
  const [tag, keyword] = ['태그태그', '키워드'];
  return (
    <>
      <StyledKeywordStatus>
        <TagMark tag={tag} />
        <Filter />
      </StyledKeywordStatus>
      <StyledKeywordList>
        <KeywordLine keyword={keyword} timlist={timlist} />
        <KeywordLine keyword={keyword} timlist={timlist} />
        <KeywordLine keyword={keyword} timlist={timlist} />
        <KeywordLine keyword={keyword} timlist={timlist} />
        <KeywordLine keyword={keyword} timlist={timlist} />
        <KeywordLine keyword={keyword} timlist={timlist} />
        <KeywordLine keyword={keyword} timlist={timlist} />
        <KeywordLine keyword={keyword} timlist={timlist} />
        <KeywordLine keyword={keyword} timlist={timlist} />
        <KeywordLine keyword={keyword} timlist={timlist} />
      </StyledKeywordList>
    </>
  );
};

export default Keyword;
