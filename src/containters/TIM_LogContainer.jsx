import React, { useState } from 'react';
import styled from 'styled-components';
import { TIM_Color } from '../styles/color';
import TIM_Log from '../components/TIM_Log';

const data = {
  tag_bg: {
    color: 'blue',
    type: '1',
  },
  tag_text: '김태그1',
  keyword_bg: {
    color: 'blue',
    type: '2',
  },
  keyword_text: '박키워드2',
  contents: '최로그 312312312',
};

const TIM_LogContainer = (props) => {
  return (
    <>
      <TIM_Log
        tag_bg={data.tag_bg}
        tag_text={data.tag_text}
        keyword_bg={data.keyword_bg}
        keyword_text={data.keyword_text}
        contents={data.contents}
      />
    </>
  );
};
export default TIM_LogContainer;
