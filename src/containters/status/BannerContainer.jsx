import React, { useEffect, useState } from 'react';
import { getBanner, getFavoritePost } from '../../api/post';
import Banner from '../../components/Banner';

const InitBannerData = {
  content: '즐겨찾기에 메모를 추가해보세요!',
  createAt: '2021-11-27',
  image:
    'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
  tag: 'TIM',
  keyword: 'Project',
};

const BannerDataDestructuring = (data) => {
  //   data : {
  //     "id": 63,
  //     "content": "메모메모",
  //     "createAt": "2021-11-26T05:34:17.134Z",
  //     "updateAt": "2021-11-26T05:47:45.398Z",
  //     "isFavorite": true,
  //     "user_id": 1,
  //     "tag_id": 30,
  //     "keyword_id": 42,
  //     "image": null,
  //     "post_tag": {
  //         "id": 30,
  //         "tag": "a",
  //         "tag_color": "pink",
  //         "createAt": "2021-11-26T05:34:17.114Z",
  //         "updateAt": "2021-11-26T05:34:17.115Z",
  //         "author_id": 1
  //     },
  //     "post_keyword": {
  //         "id": 42,
  //         "keyword_name": "asdf",
  //         "keyword_color": "pink",
  //         "createAt": "2021-11-26T05:34:17.125Z",
  //         "updateAt": "2021-11-26T05:34:17.126Z",
  //         "parent_tag_id": 30
  //     }
  // }

  let { content, createAt, image, post_tag, post_keyword } = data;
  let { tag } = post_tag || { tag: '' };
  let { keyword_name: keyword = '' } = post_keyword || { keyword: '' };
  image =
    image ||
    'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80';
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
  const [bannerData, setBannerData] = useState(InitBannerData);

  const BannerUpdate = async () => {
    const data = await getBanner();
    const selected = BannerDataDestructuring(data);
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
