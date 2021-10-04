import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecentPost, getFavoritePost } from '../../api/post';
import { favoritePost } from '../../modules/post';
import TIMLog from '../../components/TIMLog';
import { reloadAction } from '../../modules/reload';

const TIMLogContainer = ({ type }) => {
  const [timData, setTimData] = useState(null);
  const reloaded = useSelector(({ reload }) => reload);
  const dispatch = useDispatch();

  const LogContainerfetch = async () => {
    // console.log('fetch 실행?');
    try {
      if (type === 'log') {
        const data = await getRecentPost();
        setTimData(data);
        return;
      } else if (type === 'favorite') {
        const data = await getFavoritePost();
        setTimData(data);
        return;
      } else {
        console.log('뭔가잘못되었을때?');
      }
    } catch (err) {}
  };

  const onFavorite = (post_id) => {
    dispatch(favoritePost(post_id));
    dispatch(reloadAction('timLog'));
  };

  useEffect(() => {
    // console.log('마운트 시 fetch');
    LogContainerfetch();
  }, []);

  //데이터 실시간 갱신 시에 리프레시 해주는 코드
  useEffect(() => {
    if (reloaded) {
      // console.log('reload');
      // console.log(reloaded);

      if (reloaded.timLog === true) {
        LogContainerfetch();
      }
    }
  }, [reloaded]);

  if (timData === null) {
    console.log('데이터 없는경우 ');
    return <div></div>;
  }
  if (timData) {
    // console.log('랜더링 ing');
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
          onFavorite={onFavorite}
        />
      );
    });
  }
};
export default TIMLogContainer;
