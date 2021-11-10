import React from 'react';
import styled from 'styled-components';

const StyledTagMark = styled.button`
  height: 80px;
  display: flex;
  background-color: ${({ tagColor, theme }) => theme.component[tagColor][1]};
  align-items: center;
  padding: 0px 28px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.font['white']};
  & + & {
    margin-left: 30px;
  }
`;

const TagMark = ({ tagName, tagColor }) => {
  console.log(tagName, tagColor);
  return <StyledTagMark tagColor={tagColor}>{tagName}</StyledTagMark>;
};

export default TagMark;
