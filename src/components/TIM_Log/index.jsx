import React, { useState } from 'react';
import Tag from './Tag';
import Keyword from './Keyword';
import Contents from './Contents';
import LogWrapper from './LogWrapper';

const TIM_Log = ({ tag_bg, tag_text, keyword_bg, keyword_text, contents }) => {
  return (
    <LogWrapper>
      <Tag tag_bg={tag_bg} tag_text={tag_text}></Tag>
      <Keyword keyword_bg={keyword_bg} keyword_text={keyword_text}></Keyword>
      <Contents contents={contents}></Contents>
    </LogWrapper>
  );
};
export default TIM_Log;
