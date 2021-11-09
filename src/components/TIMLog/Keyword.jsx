import React from 'react';
import styled from 'styled-components';

const StyledKeyword = styled.div`
  background-color: ${(props) => props.theme.grey[2]};
  color: ${(props) => props.theme.font[1]};
  border-radius: 0px 8px 8px 0px;
  font-weight: bold;
  padding: 11px 15px;
  margin-left: 3px;
`;

<<<<<<< HEAD:src/components/TIM_Log/Keyword.jsx
const Keyword = ({ keyword_text }) => {
  return (
    <>
      <StyledKeyword>@{keyword_text}</StyledKeyword>
=======
const Keyword = ({ keyword_color, keyword }) => {
  // const { color } = keyword_color;
  const bg = TIM_Color(keyword_color, '2');
  return (
    <>
      <StyledKeyword bg={bg}>@{keyword}</StyledKeyword>
>>>>>>> 2c9503be246056898995cb98a83382f273b9164d:src/components/TIMLog/Keyword.jsx
    </>
  );
};

export default Keyword;
