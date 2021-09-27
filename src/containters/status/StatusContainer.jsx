import React, { useState } from 'react';
import StatusButton from '../../components/Status/StatusButton';
import { StatusPageWrapper } from '../../styles/PageWrapper';
import Status from '../../components/Status';

const dummydata = {
  title: 'log',
  data: [
    {
      tag_bg: {
        color: 'blue',
      },
      tag_text: '태그1',
      keyword_bg: {
        color: 'blue',
      },
      keyword_text: '키워드1',
      contents: '가장 최근에 작성된 로그를 볼수 있는곳',
    },
    {
      tag_bg: {
        color: 'red',
      },
      tag_text: '태그2',
      keyword_bg: {
        color: 'yellow',
      },
      keyword_text: '키워드2',
      contents: '태그 키워드 로그 날짜',
    },
    {
      tag_bg: {
        color: 'indigo',
      },
      tag_text: '태그3',
      keyword_bg: {
        color: 'blue',
      },
      keyword_text: '키워드3',
      contents: '로그로그로그로그로그로그로그로그',
    },
    {
      tag_bg: {
        color: 'pink',
      },
      tag_text: '태그4',
      keyword_bg: {
        color: 'orange',
      },
      keyword_text: '키워드4',
      contents: '로그로그로그로그로그로그로그로그',
    },
    {
      tag_bg: {
        color: 'violet',
        type: '1',
      },
      tag_text: '태그5',
      keyword_bg: {
        color: 'teal',
      },
      keyword_text: '키워드5',
      contents: '로그로그로그로그로그로그로그로그',
    },
  ],
};
const StatusContainer = ({ children }) => {
  const [state, setState] = useState(0);

  const onStateChange = (check) => {
    if (check === true) {
      if (state === 1) {
        return;
      }
      setState(state + 1);
    } else {
      if (state === 0) {
        return;
      }

      setState(state - 1);
    }
  };

  return (
    <StatusPageWrapper>
      <Status data={dummydata} state={state}></Status>
      <StatusButton onStateChange={onStateChange} />
    </StatusPageWrapper>
  );
};

export default StatusContainer;
