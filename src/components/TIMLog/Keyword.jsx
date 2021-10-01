import React from 'react';
import styled from 'styled-components';
import { TIM_Color } from '../../styles/color';

const StyledKeyword = styled.div`
  background-color: ${(props) => props.bg};
  color: ${TIM_Color('font', 1)};
  border-radius: 0px 8px 8px 0px;
  font-weight: bold;
  padding: 11px 15px;
  margin-left: 3px;
`;

const Keyword = ({ keyword_color, keyword }) => {
  // const { color } = keyword_color;
  const bg = TIM_Color(keyword_color, '2');
  return (
    <>
      <StyledKeyword bg={bg}>@{keyword}</StyledKeyword>
    </>
  );
};

export default Keyword;
