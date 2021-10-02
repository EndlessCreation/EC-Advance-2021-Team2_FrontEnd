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

const Tag = ({ tag_bg, tag_text, children }) => {
  return (
    <>
      <StyledTag>#{tag_text}</StyledTag>
    </>
  );
};

export default Tag;
