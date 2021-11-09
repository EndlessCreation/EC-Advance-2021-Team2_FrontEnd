import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import Keyword from '../components/Keyword';
import { getPostInTag } from '../modules/post';
import { check } from '../modules/user';

const dummyData = [
  {
    id: 6,
    content: '로그 로그로그로ㄹ로',
    createAt: '2021-09-25T16:01:14.883Z',
    updateAt: '2021-09-25T16:33:13.331Z',
    isFavorite: false,
    user_id: 1,
    tag_id: 1,
    keyword_id: 7,
    image: null,
  },
  {
    id: 5,
    content: '로그 로그로그로',
    createAt: '2021-09-22T15:59:13.469Z',
    updateAt: '2021-09-22T16:32:11.958Z',
    isFavorite: false,
    user_id: 1,
    tag_id: 1,
    keyword_id: 1,
    image: null,
  },
  {
    id: 4,
    content: 'ㅇㄹㅁㄴㅇㄹㄴ',
    createAt: '2021-09-22T15:59:05.358Z',
    updateAt: '2021-09-22T16:31:48.502Z',
    isFavorite: false,
    user_id: 1,
    tag_id: 1,
    keyword_id: 3,
    image: null,
  },
  {
    id: 3,
    content: 'fiasdfasdfdsfasf',
    createAt: '2021-09-22T15:59:03.120Z',
    updateAt: '2021-09-22T16:31:39.793Z',
    isFavorite: false,
    user_id: 1,
    tag_id: 1,
    keyword_id: 3,
    image: null,
  },
  {
    id: 2,
    content: 'fiasdfasdfdsfasf',
    createAt: '2021-09-22T15:59:00.468Z',
    updateAt: '2021-09-22T16:30:35.824Z',
    isFavorite: false,
    user_id: 1,
    tag_id: 1,
    keyword_id: 1,
    image: null,
  },
  {
    id: 6,
    content: '로그 로그로그로ㄹ로',
    createAt: '2021-09-22T16:01:14.883Z',
    updateAt: '2021-09-22T16:33:13.331Z',
    isFavorite: true,
    user_id: 1,
    tag_id: 1,
    keyword_id: 7,
    image: null,
  },
  {
    id: 5,
    content: '로그 로그로그로',
    createAt: '2021-09-22T15:59:13.469Z',
    updateAt: '2021-09-22T16:32:11.958Z',
    isFavorite: false,
    user_id: 1,
    tag_id: 1,
    keyword_id: 1,
    image: null,
  },
  {
    id: 4,
    content: 'ㅇㄹㅁㄴㅇㄹㄴ',
    createAt: '2021-09-22T15:59:05.358Z',
    updateAt: '2021-09-22T16:31:48.502Z',
    isFavorite: false,
    user_id: 1,
    tag_id: 1,
    keyword_id: 3,
    image: null,
  },
  {
    id: 3,
    content: 'fiasdfasdfdsfasf',
    createAt: '2021-09-22T15:59:03.120Z',
    updateAt: '2021-09-22T16:31:39.793Z',
    isFavorite: false,
    user_id: 1,
    tag_id: 1,
    keyword_id: 3,
    image: null,
  },
  {
    id: 2,
    content: 'fiasdfasdfdsfasf',
    createAt: '2021-09-22T15:59:00.468Z',
    updateAt: '2021-09-22T16:30:35.824Z',
    isFavorite: true,
    user_id: 1,
    tag_id: 1,
    keyword_id: 1,
    image: null,
  },
  {
    id: 6,
    content: '로그 로그로그로ㄹ로',
    createAt: '2021-09-22T16:01:14.883Z',
    updateAt: '2021-09-22T16:33:13.331Z',
    isFavorite: true,
    user_id: 1,
    tag_id: 1,
    keyword_id: 7,
    image: null,
  },
  {
    id: 5,
    content: '로그 로그로그로',
    createAt: '2021-09-22T15:59:13.469Z',
    updateAt: '2021-09-22T16:32:11.958Z',
    isFavorite: false,
    user_id: 1,
    tag_id: 1,
    keyword_id: 1,
    image: null,
  },
  {
    id: 4,
    content: 'ㅇㄹㅁㄴㅇㄹㄴ',
    createAt: '2021-09-22T15:59:05.358Z',
    updateAt: '2021-09-22T16:31:48.502Z',
    isFavorite: false,
    user_id: 1,
    tag_id: 1,
    keyword_id: 3,
    image: null,
  },
  {
    id: 3,
    content: 'fiasdfasdfdsfasf',
    createAt: '2021-09-23T15:59:03.120Z',
    updateAt: '2021-09-23T16:31:39.793Z',
    isFavorite: false,
    user_id: 1,
    tag_id: 1,
    keyword_id: 3,
    image: null,
  },
  {
    id: 2,
    content: 'fiasdfasdfdsfasf',
    createAt: '2021-09-24T15:59:00.468Z',
    updateAt: '2021-09-24T16:30:35.824Z',
    isFavorite: true,
    user_id: 1,
    tag_id: 1,
    keyword_id: 1,
    image: null,
  },
];

const KeywordContainer = ({ match }) => {
  const { user, postInTag } = useSelector(({ user, post }) => ({
    user: user.user,
    postInTag: post.postInTag,
  }));
  const dispatch = useDispatch();
  const { tagId } = match.params;

  useEffect(() => {
    dispatch(getPostInTag(tagId));
  }, [dispatch, tagId]);
  return <Keyword user={user} postInTag={postInTag} />;
};

export default withRouter(KeywordContainer);
