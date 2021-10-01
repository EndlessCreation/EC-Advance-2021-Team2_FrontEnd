import React from 'react';
import styled from 'styled-components';
import { MdImage, MdStar, MdStarBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';

const StyledTimwrap = styled.div`
  position: relative;
  width: 75px;
  height: 55px;
  margin-bottom: 32px;
  border: 1px #a6a6a6;
  overflow: hidden;
  border-radius: 5px;
  background-color: ${(props) => props.theme.grey[4]};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
`;

const StyledTailwrapforClick = styled.div`
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
    background-color: ${(props) => props.theme.grey[3]};
  }
  &:active {
    background-color: ${(props) => props.theme.grey[3]};
  }
`;

const StyledDate = styled.div`
  position: absolute;
  z-index: 0;
  top: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const StyledIconsWrap = styled.div`
  position: relative;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledIconButton = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px;
  width: 30px;
  height: 20px;
  &:hover {
    background-color: ${(props) => props.theme.grey[3]};
  }
  &:active {
    background-color: ${(props) => props.theme.grey[3]};
  }
`;

const ImageIcon = ({ image }) => (
  <StyledIconButton>{image && <MdImage />}</StyledIconButton>
);

const StarIcon = ({ isFavorite }) => (
  <StyledIconButton>
    {isFavorite ? <MdStar /> : <MdStarBorder />}
  </StyledIconButton>
);

const Icons = ({ image, isFavorite }) => {
  return (
    <StyledIconsWrap>
      <ImageIcon image={image} />
      <StarIcon isFavorite={isFavorite} />
    </StyledIconsWrap>
  );
};

const KeywordTail = ({ tim }) => {
  const { id, createAt, image, isFavorite } = tim;

  const date = createAt.toString().slice(5, 10);

  return (
    <StyledTimwrap>
      <Link to="/tim">
        <StyledTailwrapforClick>
          <StyledDate>{date}</StyledDate>
        </StyledTailwrapforClick>
      </Link>
      <Icons image={image} isFavorite={isFavorite} />
    </StyledTimwrap>
  );
};
export default KeywordTail;
