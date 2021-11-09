import React from 'react';
import BannerWrap from './BannerWrap';
import Info from './Info';
import Title from './Title';

const Banner = ({ onBannerReload, content, createAt, image, tag, keyword }) => {
  // const [log, info, image] = [
  //   '프로젝트 시작, EC:Advance 2팀 화이팅',
  //   { tag: '태그', keyword: '키워드', date: '2021-06-27' },
  // ];

  return (
    <BannerWrap image={image} onBannerReload={onBannerReload}>
      <Title content={content} />
      <Info tag={tag} keyword={keyword} createAt={createAt} />
    </BannerWrap>
  );
};

export default Banner;
