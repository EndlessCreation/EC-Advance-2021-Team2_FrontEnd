import React from 'react';
import styled from 'styled-components';
import TIMLog from '../TIMLog';

const SearchItem = ({ item }) => {
  const {
    id,
    updateAt,
    isFavorite,
    content,
    tag,
    tag_color,
    keyword,
    keyword_color,
    onFavorite,
  } = item;
  console.log(item);

  return (
    <TIMLog
      id={id}
      updateAt={updateAt}
      isFavorite={isFavorite}
      content={content}
      tag={tag}
      tag_color={tag_color}
      keyword={keyword}
      keyword_color={keyword_color}
      onFavorite={onFavorite}
    />
  );
};

export default SearchItem;
