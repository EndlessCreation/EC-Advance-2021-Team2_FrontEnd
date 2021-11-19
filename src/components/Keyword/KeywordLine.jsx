import React from 'react';
import styled from 'styled-components';
import KeywordTail from './KeywordTail';

const KeywordLine = ({ tagName, keywordName, postList, keywordColor }) => {
  if (!(tagName && keywordName && postList && keywordColor)) return null;
  //위에 네개의 값을 받아오지 못했을때 초기값으로 랜더링 -> 4개 값 적용된 컴포넌트 랜더링 하는 버벅임이 생겨서 위 코드 추가
  return (
    <KeywordLineWrap>
      <KeywordHead keywordColor={keywordColor}>{keywordName}</KeywordHead>
      <KeywordTailWrap>
        {postList.map((post) => (
          <KeywordTail key={post.id} post={post} tagName={tagName} />
        ))}
      </KeywordTailWrap>
    </KeywordLineWrap>
  );
};

const KeywordHead = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;
  width: 150px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  background-color: ${({ keywordColor, theme }) => {
    return theme.component[keywordColor][4];
  }};
  margin-bottom: 32px;
`;
const KeywordLineWrap = styled.div`
  flex-shrink: 0;
  scroll-snap-align: start; /* latest (Chrome 69+) */
  scroll-snap-coordinate: 0% 0%; /* older (Firefox/IE) */
  -webkit-scroll-snap-coordinate: 0% 0%; /* older (Safari) */

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

const KeywordHead = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;
  width: 150px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.grey[4]};
  margin-bottom: 32px;
`;

const KeywordTailWrap = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-top: 15px;
  flex-direction: column;
  position: static;
  align-items: center;
`;

export default KeywordLine;
