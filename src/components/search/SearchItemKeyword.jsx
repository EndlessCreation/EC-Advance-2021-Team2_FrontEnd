import React from 'react';
import styled from 'styled-components';

const StyledKeyword = styled.div`
  background-color: ${({ theme, keywordColor }) => {
    // console.log(theme.component[keywordColor]);
    return theme.component[keywordColor][2] || 'white';
  }};
  color: ${(props) => props.theme.font[1]};
  border-radius: 0px 8px 8px 0px;
  font-weight: bold;
  padding: 11px 15px;
  margin-left: 3px;
  flex-shrink: 1;
  line-height: 30px;
`;

const SearchItemKeyword = ({ keywordColor, keywordName }) => {
  console.log(keywordColor);

  return (
    <>
      <StyledKeyword keywordColor={keywordColor || 'grey'}>
        @{keywordName || ''}
      </StyledKeyword>
    </>
  );
};

export default SearchItemKeyword;
