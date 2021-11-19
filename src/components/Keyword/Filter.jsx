import React from 'react';
import styled from 'styled-components';
import EnterDate from '../common/EnterDate';

const StyledFilterWrapper = styled.button`
  height: 54px;
  display: flex;
  background-color: ${(props) => props.theme.brand[5]};
  align-items: center;
  border: none;
  border-radius: 20px;
  padding: 0 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

const Filter = ({ onFilteringDate }) => {
  return (
    <StyledFilterWrapper>
      <EnterDate placeholder={'시작날짜'} onFilteringDate={onFilteringDate} />
    </StyledFilterWrapper>
  );
};

export default Filter;
