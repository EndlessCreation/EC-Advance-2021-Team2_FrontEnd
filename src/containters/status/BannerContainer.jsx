import React, { useEffect, useState } from 'react';
import { getBanner, getFavoritePost } from '../../api/post';
import Banner from '../../components/Banner';

const randomIndex = (min, max) => {
  // let [min, max] = [min, max];
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};

const BannerDataDestructuring = (data) => {
  const dummyImage =
    'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80';
  let {
    //   id,
    content,
    createAt,
    image,
    post_tag,
    post_keyword,
  } = data;
  let { tag } = post_tag || { tag: '' };
  let { keyword_name: keyword = '' } = post_keyword || { keyword: '' };

  image = image ? image : dummyImage;
  createAt = createAt.toString().slice(0, 10);
  return {
    content: content,
    createAt: createAt,
    image: image,
    tag: tag,
    keyword: keyword,
  };
};

const BannerContainer = (props) => {
  const [bannerData, setBannerData] = useState();

  const BannerUpdate = async () => {
    const data = await getBanner();
    const index = randomIndex(0, data.length);
    const selected = BannerDataDestructuring(data[index]);
    setBannerData(selected);
  };

  useEffect(() => {
    BannerUpdate();
  }, []);

  if (!bannerData) {
    return <div>122</div>;
  }
  if (bannerData) {
    return (
      <Banner
        onBannerReload={BannerUpdate}
        content={bannerData.content}
        createAt={bannerData.createAt}
        image={bannerData.image}
        tag={bannerData.tag}
        keyword={bannerData.keyword}
      />
    );
  }
};

export default BannerContainer;
