import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import SearchItemContents from './SearchItemContents';
import SearchItemKeyword from './SearchItemKeyword';
import SearchItemTag from './SearchItemTag';

const SearchItem = ({ item }) => {
  const {
    id,
    createAt,
    isFavorite,
    content,
    tag,
    tag_id,
    keyword,
    keyword_id,
    image,
  } = item;
  const { tag: tagName, tag_color: tagColor } = tag;
  const { keyword: keywordName, keyword_color: keywordColor } = keyword;

  return (
    <StyledLink
      to={{
        pathname: `/tim/${tag_id}/${keyword_id}`,
        state: { tagName, tagColor },
      }}
    >
      <StyledWrapper>
        <SearchItemTag tagName={tagName} tagColor={tagColor} />
        <SearchItemKeyword
          keywordName={keywordName}
          keywordColor={keywordColor}
        />
        <SearchItemContents
          content={content}
          createAt={createAt}
          isFavorite={isFavorite}
          id={id}
        />
      </StyledWrapper>
    </StyledLink>
  );
};

export default withRouter(SearchItem);

const StyledWrapper = styled.div`
  height: 100%;
  border-radius: 10px;
  border: 1px solid #8787877a;
  background-color: #ffffff;
  font-size: 20px;
  display: flex;
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.font[3]};
  text-decoration: none;
  & + & {
    margin-top: 14px;
  }
`;
