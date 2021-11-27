import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.div`
  background-color: ${({ theme, tagColor }) => {
    // console.log(tagColor);
    return tagColor !== 'undefined' ? theme.component[tagColor][1] : '#FAFCF9';
  }};
  color: ${(props) => props.theme.font['white']};
  flex-shrink: 0;
  font-size: 20px;
  text-align: center;
  align-items: center;
  box-sizing: border-box;
  padding: 11px 15px;
  border-radius: 8px 0px 0px 8px;
  line-height: 30px;
`;

const SearchItemTag = ({ tagColor, tagName, children }) => {
  // console.log(tag, tag_color);
  // if (!(tag && tag_color)) return <>loading</>;

  return (
    <>
      <StyledTag tagColor={tagColor || 'grey'}>#{tagName || ''}</StyledTag>
    </>
  );
};

export default SearchItemTag;
