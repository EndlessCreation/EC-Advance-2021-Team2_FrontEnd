import React from 'react';
import styled from 'styled-components';
import { TIM_Color } from '../../styles/color';

const StyledTagMark = styled.button`
  height: 80px;
  display: flex;
  background-color: ${(props) =>
    props.bgColor
      ? TIM_Color(props.bgColor[0], props.bgColor[1])
      : ('indigo', 1)};
  align-items: center;
  padding: 0px 28px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  font-size: 28px;
  font-weight: bold;
  color: ${TIM_Color('font', 'white')};
  & + & {
    margin-left: 30px;
  }
`;

const TagMark = ({ tag, bgColor }) => {
  return <StyledTagMark bgColor={bgColor}>{tag}</StyledTagMark>;
};

export default TagMark;
