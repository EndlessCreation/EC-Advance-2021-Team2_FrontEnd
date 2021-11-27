import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { getPostInTag } from '../api/post';
import TIMView from '../components/TIMView/TIMView';
import { getPostInKeyword } from '../modules/post';

const dummyData = [
  {
    image: null,
    bgColor: 'blue',
    date: '2021-09-24T16:01:14.883Z',
    content: '이전 TIM, 다음 TIM은 좀 더 작은 크기로 보여줍니다',
  },
  {
    image:
      'https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvamVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    bgColor: 'blue',
    date: '2021-09-26T16:01:14.883Z',
    content: 'EC:ADvance 2팀 화이팅 중간발표도 화이팅',
  },
  {
    image: null,
    bgColor: 'red',
    date: '2021-09-27T16:01:14.883Z',
    content: '암 온 더 넥스트 TIM',
  },
];

// 특정 키워드(keywordId) 안에 있는 tim 불러와야 함
const TIMViewContainer = ({ match, location }) => {
  console.log(match, location);
  const { user, postInKeyword } = useSelector(({ user, post }) => ({
    user: user.user,
    postInKeyword: post.postInKeyword,
  }));
  console.log(user, postInKeyword);
  const dispatch = useDispatch();
  const { tagId, keywordId } = match.params;
  const {
    state: { tagName, tagColor },
  } = location;
  const {
    post: postList,
    keyword_name: keywordName,
    keyword_color: keywordColor,
  } = postInKeyword || { post: '', keyword_name: '', keyword_color: '' };

  useEffect(() => {
    dispatch(getPostInKeyword(keywordId));
  }, [dispatch, keywordId, tagId]);

  const onEdit = (e) => {
    console.log('수정버튼 클릭');
  };

  if (postList.length === 0) return <>loading</>;
  if (postList)
    return (
      <TIMView
        user={user}
        tagName={tagName}
        tagColor={tagColor}
        keywordName={keywordName}
        keywordColor={keywordColor}
        postlist={postList}
        onEdit={onEdit}
      />
    );
};

export default withRouter(TIMViewContainer);