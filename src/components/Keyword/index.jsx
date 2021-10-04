import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import KeywordLine from './KeywordLine';
import TagMark from './TagMark';

const Keyword = ({ user, tagName, keyword, postInKeyword }) => {
  if (!user) return null;
  if (!keyword || !postInKeyword) return <div>loading...</div>;
  const { keyword_name: keywordName, post: postList } = postInKeyword;

  return (
    <>
      <HeaderMargin />
      <KeywordStatus>
        <TagMark tagName={tagName} />
        <Filter />
      </KeywordStatus>
      <KeywordList>
        <KeywordLine keywordName={keywordName} postList={postList} />
      </KeywordList>
    </>
  );
};

const KeywordStatus = styled.div`
  display: flex;
  margin: 35px 66px;
  justify-content: space-between;
  align-items: center;
`;
const KeywordList = styled.div`
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
const HeaderMargin = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
`;

export default Keyword;
