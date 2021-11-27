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
    // try {
    if (type === 'log') {
      const data = await getRecentPost();
      setTimData(data);
    } else if (type === 'favorite') {
      const data = await getFavoritePost();
      setTimData(data);
    } else {
      console.log('뭔가잘못되었을때?');
    }
    // } catch (err) {}
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
      if (reloaded.timLog === true) {
        LogContainerfetch();
      }
    }
  }, [reloaded]);

  if (timData === null) {
    return <>loading</>;
  }

  if (typeof timData === 'string') {
    console.log('데이터 없는경우 ');
    return <div>아직 데이터가 없습니다!</div>;
  }

  if (timData) {
    // console.log(timData);
    return timData.map((tim, index) => {
      let {
        id,
        content,
        createAt,
        updateAt,
        isFavorite,
        tag_id,
        keyword_id,
        post_tag = { tag: '', tag_color: 'grey' },
        post_keyword,
        image,
      } = tim;

      // console.log(post_tag, post_keyword);
      // console.log(tim);
      let { tag, tag_color } = post_tag || {
        tag: '',
        tag_color: 'grey',
      };
      let { keyword_name: keyword, keyword_color } = post_keyword || {
        keyword_name: '',
        keyword_color: 'grey',
      };

      // let { tag, tag_color } =
      //   post_tag !== undefined && post_tag !== null
      //     ? post_tag
      //     : { tag: '', tag_color: 'grey' };
      // let { keyword_name: keyword, keyword_color } =
      //   post_keyword !== undefined && post_keyword !== null
      //     ? post_keyword
      //     : {
      //         keyword_name: '',
      //         keyword_color: 'grey',
      //       };

      return (
        <TIMLog
          key={index}
          id={id}
          createAt={createAt}
          isFavorite={isFavorite}
          content={content}
          tag={tag || ''}
          tag_color={tag_color === 'undefined' ? 'grey' : tag_color}
          keyword={keyword || ''}
          keyword_color={keyword_color === 'undefined' ? 'grey' : keyword_color}
          onFavorite={onFavorite}
        />
      );
    });
  }
};
export default TIMLogContainer;
