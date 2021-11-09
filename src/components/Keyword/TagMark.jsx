import React from 'react';
import styled from 'styled-components';

const StyledTagMark = styled.button`
  height: 80px;
  display: flex;
<<<<<<< HEAD
  background-color: ${(props) => props.theme.indigo[1]};
=======
  background-color: ${(props) =>
    props.bgColor ? props.theme.indigo[4] : ('indigo', 1)};
>>>>>>> 2c9503be246056898995cb98a83382f273b9164d
  align-items: center;
  padding: 0px 28px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  font-size: 28px;
  font-weight: bold;
<<<<<<< HEAD
  color: ${(props) => props.theme.font['white']};
=======
  color: ${TIM_Color('font', 'white')};
>>>>>>> 2c9503be246056898995cb98a83382f273b9164d
  & + & {
    margin-left: 30px;
  }
`;

<<<<<<< HEAD
const TagMark = ({ tag }) => {
  return <StyledTagMark>{tag}</StyledTagMark>;
=======
const TagMark = ({ tag, bgColor }) => {
  return <StyledTagMark bgColor={bgColor}>{tag}</StyledTagMark>;
>>>>>>> 2c9503be246056898995cb98a83382f273b9164d
};

export default TagMark;
