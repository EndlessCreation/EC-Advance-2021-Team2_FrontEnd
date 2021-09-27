import React from 'react';
import styled from 'styled-components';
import { TIM_Color } from '../../styles/color';

const StyledTagMark = styled.button`
  height: 80px;
  display: flex;
  background-color: ${TIM_Color('indigo', 1)};
  align-items: center;
  padding: 0px 28px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  font-size: 28px;
  font-weight: bold;
  color: ${TIM_Color('font', 'white')};
`;

const TagMark = ({ tag }) => {
  return <StyledTagMark>@{tag}</StyledTagMark>;
};

export default TagMark;
