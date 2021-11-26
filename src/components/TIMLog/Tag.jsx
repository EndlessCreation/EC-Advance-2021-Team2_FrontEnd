import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.div`
  background-color: ${({ theme, tagColor }) => {
    // console.log(tagColor);
    return tagColor !== 'undefined' ? theme.component[tagColor][1] : '#FAFCF9';
  }};
  color: ${(props) => props.theme.font['white']};
  font-size: 20px;
  text-align: center;
  align-items: center;
  padding: 11px 15px;
  border-radius: 8px 0px 0px 8px;
  font-weight: bold;
`;

const Tag = ({ tag_color, tag, children }) => {
  // console.log(tag, tag_color);
  // if (!(tag && tag_color)) return <>loading</>;

  return (
    <>
      <StyledTag tagColor={tag_color || 'grey'}>#{tag || ''}</StyledTag>
    </>
  );
};

export default Tag;
