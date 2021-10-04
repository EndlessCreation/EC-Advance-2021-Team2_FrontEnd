import React from 'react';
import Tag from './Tag';
import Keyword from './Keyword';
import Contents from './Contents';
import LogWrapper from './LogWrapper';

const TIMLog = ({
  id,
  updateAt,
  isFavorite,
  content,
  tag,
  tag_color,
  keyword,
  keyword_color,
  onFavorite,
}) => {
  return (
    <LogWrapper key={id}>
      <Tag tag_color={tag_color} tag={tag}></Tag>
      <Keyword keyword_color={keyword_color} keyword={keyword}></Keyword>
      <Contents
        id={id}
        content={content}
        updateAt={updateAt}
        isFavorite={isFavorite}
        onFavorite={onFavorite}
      ></Contents>
    </LogWrapper>
  );
};
export default TIMLog;
