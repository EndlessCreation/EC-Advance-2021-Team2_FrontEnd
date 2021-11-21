import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import KeywordLine from './KeywordLine';
import TagMark from './TagMark';

const Keyword = ({ user, postInTag, onFilteringDate }) => {
  if (!user) return null;
  if (!postInTag) return <div>loading...</div>;
  const { tag, tag_color, keyword: keywordList } = postInTag;

  return (
    <>
      <HeaderMargin />
      <KeywordStatus>
        <TagMark tagName={tag} tagColor={tag_color} />
        <Filter />
      </KeywordStatus>
      <KeywordList>
        {keywordList.map((keyword) => (
          <KeywordLine
            key={keyword.id}
            tagName={tag}
            keywordColor={keyword.keyword_color}
            keywordName={keyword.keyword_name}
            postList={keyword.post}
          />
        ))}
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
  display: flex;
  align-items: stretch;
  width: 100%;
  overflow: auto;
  scroll-snap-type: x mandatory; /* Chrome Canary */
  scroll-snap-type: mandatory; /* Firefox */
  -ms-scroll-snap-type: mandatory; /* IE/Edge */
  -webkit-scroll-snap-type: mandatory; /* Safari */
  -webkit-scroll-snap-destination: 0% 0%;
  -webkit-overflow-scrolling: touch; /* important for iOS */

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
