import React from 'react';
import styled from 'styled-components';
import { MdImage, MdStar, MdStarBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';

const KeywordTail = ({ tagName, post }) => {
  const { createAt, image, isFavorite, tag_id, keyword_id } = post;
  const date = createAt.toString().slice(5, 10);

  return (
    <Timwrap>
      <Link
        to={{
          pathname: `/tim/${tag_id}/${keyword_id}`,
          state: { tagName },
        }}
      >
        <TailwrapforClick>
          <Date>{date}</Date>
        </TailwrapforClick>
      </Link>
      <IconsWrap>
        <IconButton>{image && <MdImage />}</IconButton>
        <IconButton>{isFavorite ? <MdStar /> : <MdStarBorder />}</IconButton>
      </IconsWrap>
    </Timwrap>
  );
};
const Timwrap = styled.div`
  position: relative;
  width: 75px;
  height: 55px;
  margin-bottom: 32px;
  border: 1px #a6a6a6;
  overflow: hidden;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.component.grey[4]};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
`;

const TailwrapforClick = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  z-index: 0;
  width: 100%;
  height: 100%;
  color: black;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.component.grey[3]};
  }
  &:active {
    background-color: ${({ theme }) => theme.component.grey[3]};
  }
`;

const Date = styled.div`
  position: absolute;
  z-index: 0;
  top: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const IconsWrap = styled.div`
  position: relative;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconButton = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px;
  width: 30px;
  height: 20px;
  &:hover {
    background-color: ${({ theme }) => theme.component.grey[3]};
  }
  &:active {
    background-color: ${({ theme }) => theme.component.grey[3]};
  }
`;
export default KeywordTail;
