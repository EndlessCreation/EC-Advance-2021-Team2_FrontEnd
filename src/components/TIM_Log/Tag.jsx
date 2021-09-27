import React from 'react';
import styled from 'styled-components';
import { TIM_Color } from '../../styles/color';

const StyledTag = styled.div`
  background-color: ${(props) => props.bg};
  color: ${TIM_Color('font', 'white')};
  font-size: 20px;
  text-align: center;
  align-items: center;
  padding: 11px 15px;
  border-radius: 8px 0px 0px 8px;
  font-weight: bold;
`;

const Tag = ({ tag_bg, tag_text, children }) => {
  const { color, type } = tag_bg;
  const bg = TIM_Color(color, type);

  return (
    <>
      <StyledTag bg={bg}>#{tag_text}</StyledTag>
    </>
  );
};

export default Tag;
