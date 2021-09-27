import React from 'react';
import BannerWrap from './BannerWrap';
import Info from './Info';
import Title from './Title';

const Banner = (props) => {
  const [log, info, image] = [
    '프로젝트 시작, EC:Advance 2팀 화이팅',
    { tag: '태그', keyword: '키워드', date: '2021-06-27' },
    'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
  ];
  return (
    <BannerWrap image={image}>
      <Title log={log} />
      <Info info={info} />
    </BannerWrap>
  );
};

export default Banner;