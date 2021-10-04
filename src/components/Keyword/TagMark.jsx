import React from 'react';
import styled from 'styled-components';

const StyledTagMark = styled.button`
  height: 80px;
  display: flex;
  background-color: ${(props) => props.theme.indigo[1]};
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

const TagMark = ({ tagName }) => {
  return <StyledTagMark>{tagName}</StyledTagMark>;
};

export default TagMark;
