import React, { useEffect, useState } from 'react';
import { getRecentPostView, getFavorPostView } from '../../api/post';
import TIMLog from '../../components/TIMLog';

const TIMLogContainer = ({ type }) => {
  const [timData, setTimData] = useState(null);

  const fetch = async () => {
    try {
      if (type === 'log') {
        const data = await getRecentPostView();
        setTimData(data);
        return;
      } else if (type === 'favorite') {
        const data = await getFavorPostView();
        setTimData(data);
        return;
      } else {
        console.log('뭔가잘못되었을때?');
      }
    } catch (err) {}
  };

  useEffect(() => {
    fetch();
  }, []);

  if (timData === null) {
    // console.log('데이터 없는경우 ');
    return <div></div>;
  }
  if (timData) {
    // console.log('데이터 다 받아버린경우');
    // console.log(timData);
    return timData.map((tim) => {
      let {
        id,
        content,
        updateAt,
        isFavorite,
        post_tag = { tag: '', tag_color: 'gray' },
        post_keyword = { keyword: '', keyword_color: 'gray' },
      } = tim;
      let { tag, tag_color } = post_tag || { tag: '', tag_color: 'gray' };
      let { keyword_name: keyword = '', keyword_color } = post_keyword || {
        keyword: '',
        keyword_color: 'gray',
      };
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
        />
      );
    });
  }
};
export default TIMLogContainer;
