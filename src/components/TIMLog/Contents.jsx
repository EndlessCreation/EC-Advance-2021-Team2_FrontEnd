import React from 'react';
import styled from 'styled-components';
import { ReactComponent as FullStar } from '../../lib/assets//TIM_Log/fullStar.svg';
import { ReactComponent as EmptyStar } from '../../lib/assets/TIM_Log/emptyStar.svg';

const StyledContentsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: right;
  align-items: center;
`;
const StyledText = styled.div`
  margin-right: 80px;
`;
const StyledStar = styled.div`
  margin-right: 25px;
`;
const StyledDate = styled.div`
  margin-right: 40px;
  font-weight: bold;
`;

const Star = ({ isFavorite, onFavorite, id }) => {
  return (
    <StyledStar onClick={() => onFavorite(id)}>
      {isFavorite ? <FullStar /> : <EmptyStar />}
    </StyledStar>
  );
};

const Contents = ({ content, updateAt, isFavorite, id, onFavorite }) => {
  const date = updateAt.toString().slice(5, 10);

  return (
    <StyledContentsWrapper>
      <StyledText>{content}</StyledText>
      <Star isFavorite={isFavorite} onFavorite={onFavorite} id={id} />
      <StyledDate>{date}</StyledDate>
    </StyledContentsWrapper>
  );
};

export default Contents;
