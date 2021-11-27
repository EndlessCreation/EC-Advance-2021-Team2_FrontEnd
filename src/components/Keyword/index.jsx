import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import KeywordLine from './KeywordLine';
import TagMark from './TagMark';

const Keyword = ({ user, postInTag, onFilteringDate }) => {
  const listRef = useRef();
  const [isDrag, setisDrag] = useState(false);
  const [startX, setStartX] = useState();
  const onDragStart = (e) => {
    e.preventDefault();
    setisDrag(true);
    setStartX(e.pageX + listRef.current.scrollLeft);
  };
  const onDragEnd = (e) => {
    setisDrag(false);
  };
  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = listRef.current;
      listRef.current.scrollLeft = startX - e.pageX;
      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };
  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };
  // onMouseMove delay 설정
  // const delay = 100;
  // const onThrottleDragMove = throttle(onDragMove, delay);
  if (!user) return null;
  if (!postInTag) return <div>loading...</div>;
  const { tag, tag_color: tagColor, keyword: keywordList } = postInTag;
  return (
    <>
      <KeywordWrapper>
        <HeaderMargin />

        <KeywordStatus>
          <TagMark tagName={tag} tagColor={tagColor} />
          <Filter onFilteringDate={onFilteringDate} />
        </KeywordStatus>
        <KeywordList
          ref={listRef}
          onMouseDown={onDragStart}
          // onMouseMove={isDrag ? onThrottleDragMove : null}
          onMouseMove={isDrag ? onDragMove : null}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
        >
          {keywordList.map((keyword) => (
            <KeywordLine
              key={keyword.id}
              tagName={tag}
              tagColor={tagColor}
              keywordColor={keyword.keyword_color}
              keywordName={keyword.keyword_name}
              postList={keyword.post}
            />
          ))}
        </KeywordList>
      </KeywordWrapper>
    </>
  );
};
const KeywordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const KeywordStatus = styled.div`
  top: 60px;
  display: flex;
  margin: 35px 66px;
  justify-content: space-between;
  align-items: center;
`;
const KeywordList = styled.div`
  display: flex;
  align-items: stretch;
  position: relative;
  padding: 48px 60px;
  /* white-space: nowrap; */
  text-align: center;
  background-color: #ffffff;
  overflow: scroll;
  flex: auto;
`;
const HeaderMargin = styled.div`
  margin-top: 60px;
`;

export default Keyword;
