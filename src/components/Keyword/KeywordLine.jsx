import React from 'react';
import styled from 'styled-components';
import KeywordTail from './KeywordTail';

const KeywordLine = ({ keywordName, postList }) => {
  return (
    <KeywordLineWrap>
      <KeywordHead>{keywordName}</KeywordHead>
      <KeywordTailWrap>
        {postList.map((post) => (
          <KeywordTail post={post} />
        ))}
      </KeywordTailWrap>
    </KeywordLineWrap>
  );
};
const KeywordLineWrap = styled.div`
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

const KeywordTailWrap = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-top: 15px;
  flex-direction: column;
  position: static;
  align-items: center;
`;
const KeywordHead = styled.div`
  position: sticky;
  z-index: 1;
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

export default KeywordLine;
