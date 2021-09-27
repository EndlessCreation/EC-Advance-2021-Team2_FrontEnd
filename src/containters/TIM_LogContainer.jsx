import React, { useState } from 'react';
import styled from 'styled-components';
import { TIM_Color } from '../styles/color';
import TIM_Log from '../components/TIM_Log';

const TIM_LogContainer = ({ data }) => {
  return data.map((tim) => (
    <TIM_Log
      tag_bg={tim.tag_bg}
      tag_text={tim.tag_text}
      keyword_bg={tim.keyword_bg}
      keyword_text={tim.keyword_text}
      contents={tim.contents}
    />
  ));
};
export default TIM_LogContainer;
