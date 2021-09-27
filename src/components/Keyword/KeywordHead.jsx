import React from 'react';
import styled from 'styled-components';
import { TIM_Color } from '../../styles/color';

const StyledKeywordHead = styled.div`
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
  background-color: ${(props) => props.headColor || TIM_Color('grey', '4')};
  margin-bottom: 32px;
`;

const KeywordHead = ({ headColor, keyword }) => {
  return <StyledKeywordHead headColor={headColor}>{keyword}</StyledKeywordHead>;
};
export default KeywordHead;
