import React from 'react';
import styled from 'styled-components';
import { ReactComponent as FullStar } from '../../lib/assets//TIM_Log/fullStar.svg';
import { ReactComponent as EmptyStar } from '../../lib/assets/TIM_Log/emptyStar.svg';

const StyledContentsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  line-height: 30px;
`;
const StyledText = styled.div`
  margin-right: 20px;
`;
const StyledStar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
const StyledDate = styled.div`
  margin-right: 20px;
  font-size: 16px;
`;

const Star = ({ isFavorite, onFavorite, id }) => {
  return (
    <StyledStar>
      {isFavorite ? <FullStar width={16} /> : <EmptyStar width={16} />}
    </StyledStar>
  );
};

const Contents = ({ content, createAt, isFavorite, id }) => {
  const date = createAt.toString().slice(5, 10);

  return (
    <StyledContentsWrapper>
      <StyledText>{content}</StyledText>
      <Star isFavorite={isFavorite} width={15} />
      <StyledDate>{date}</StyledDate>
    </StyledContentsWrapper>
  );
};

export default Contents;
