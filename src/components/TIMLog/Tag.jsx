import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.div`
  background-color: ${(props) => props.theme.grey[1]};
  color: ${(props) => props.theme.font['white']};
  font-size: 20px;
  text-align: center;
  align-items: center;
  padding: 11px 15px;
  border-radius: 8px 0px 0px 8px;
  font-weight: bold;
`;

<<<<<<< HEAD:src/components/TIM_Log/Tag.jsx
const Tag = ({ tag_bg, tag_text, children }) => {
  return (
    <>
      <StyledTag>#{tag_text}</StyledTag>
=======
const Tag = ({ tag_color, tag }) => {
  // const { color } = tag_color;
  // console.log(tag_color, tag);
  const bg = TIM_Color(tag_color, '1');

  return (
    <>
      <StyledTag bg={bg}>#{tag}</StyledTag>
>>>>>>> 2c9503be246056898995cb98a83382f273b9164d:src/components/TIMLog/Tag.jsx
    </>
  );
};

export default Tag;
