import { createAction, handleActions } from 'redux-actions';
import { createActionType, createRequestSaga } from '../lib/utils';
import { takeLatest } from '@redux-saga/core/effects';
import * as postAPI from '../api/post';
import faker from '../../node_modules/faker/index';
import shortid from 'shortid';

const [CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE] =
  createActionType('post/CREATE_POST');
const [EDIT_POST, EDIT_POST_SUCCESS, EDIT_POST_FAILURE] =
  createActionType('post/EDIT_POST');
const DELETE_POST = 'post/DELETE_POST';
const [POSTVIEW, POSTVIEW_SUCCESS, POSTVIEW_FAILURE] =
  createActionType('post/POSTVIEW');

const FAVOURITE_POST = 'post/FAVOURITE_POST';

const [POST_IN_KEYWORD, POST_IN_KEYWORD_SUCCESS, POST_IN_KEYWORD_FAILURE] =
  createActionType('post/POST_IN_KEYWORD');
const [POST_IN_TAG, POST_IN_TAG_SUCCESS, POST_IN_TAG_FAILURE] =
  createActionType('post/POST_IN_TAG');
const [
  FILTER_POST_IN_TAG,
  FILTER_POST_IN_TAG_SUCCESS,
  FILTER_POST_IN_TAG_FAILURE,
] = createActionType('post/FILTER_POST_IN_TAG');
const [
  FILTER_POST_IN_KEYWORD,
  FILTER_POST_IN_KEYWORD_SUCCESS,
  FILTER_POST_IN_KEYWORD_FAILURE,
] = createActionType('post/FILTER_POST_IN_KEYWORD');

export const createPost = createAction(CREATE_POST, (formData) => formData);
export const editPost = createAction(EDIT_POST, (formData) => formData);
export const deletePost = createAction(DELETE_POST, (post_id) => post_id);
export const favoritePost = createAction(FAVOURITE_POST, (post_id) => post_id);
export const getPostView = createAction(POSTVIEW);
export const getPostInKeyword = createAction(
  POST_IN_KEYWORD,
  (keywordId) => keywordId,
);
export const getPostInTag = createAction(POST_IN_TAG, (tagId) => tagId);
export const filterPostInTag = createAction(
  FILTER_POST_IN_TAG,
  (filteringDates) => filteringDates,
);
export const filterPostInKeyword = createAction(
  FILTER_POST_IN_KEYWORD,
  (filteringDates) => filteringDates,
);

const createPostSaga = createRequestSaga(CREATE_POST, postAPI.createPost);
const editPostSaga = createRequestSaga(EDIT_POST, postAPI.editPost);
const deletePostSaga = createRequestSaga(DELETE_POST, postAPI.deletePost);
const favoritePostSaga = createRequestSaga(
  FAVOURITE_POST,
  postAPI.favoritePost,
);
const getPostViewSaga = createRequestSaga(POSTVIEW, postAPI.getPostView);

const getPostInKeywordSaga = createRequestSaga(
  POST_IN_KEYWORD,
  postAPI.getPostInKeyword,
);
const getPostInTagSaga = createRequestSaga(POST_IN_TAG, postAPI.getPostInTag);
const filterPostInTagSaga = createRequestSaga(
  FILTER_POST_IN_TAG,
  postAPI.filterPostInTag,
);
const filterPostInKeyWordSaga = createRequestSaga(
  FILTER_POST_IN_KEYWORD,
  postAPI.filterPostInKeyword,
);

export function* postSaga() {
  yield takeLatest(CREATE_POST, createPostSaga);
  yield takeLatest(EDIT_POST, editPostSaga);
  yield takeLatest(DELETE_POST, deletePostSaga);
  yield takeLatest(FAVOURITE_POST, favoritePostSaga);
  yield takeLatest(POSTVIEW, getPostViewSaga);
  yield takeLatest(POST_IN_KEYWORD, getPostInKeywordSaga);
  yield takeLatest(POST_IN_TAG, getPostInTagSaga);
  yield takeLatest(FILTER_POST_IN_TAG, filterPostInTagSaga);
  yield takeLatest(FILTER_POST_IN_KEYWORD, filterPostInKeyWordSaga);
}

const initialState = {
  formData: null,
  error: null,
  posts: null,
  postInKeyword: null,
  postInTag: null,
};
initialState.postInTag = {
  id: shortid.generate(),
  tag: faker.name.findName(),
  tag_color: 'orange',
  keyword: [
    {
      id: shortid.generate(),
      keyword_color: 'yellow',
      keyword_name: faker.name.findName(),
      post: [
        {
          id: shortid.generate(),
          content: '로그 로그로그로ㄹ로',
          createAt: '2021-09-25T16:01:14.883Z',
          updateAt: '2021-09-25T16:33:13.331Z',
          isFavorite: false,
          user_id: 1,
          tag_id: 1,
          keyword_id: 7,
          image: faker.image.image(),
        },
        {
          id: shortid.generate(),
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
          id: shortid.generate(),
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
          id: shortid.generate(),
          content: '로그 로그로그로ㄹ로',
          createAt: '2021-09-25T16:01:14.883Z',
          updateAt: '2021-09-25T16:33:13.331Z',
          isFavorite: false,
          user_id: 1,
          tag_id: 1,
          keyword_id: 7,
          image: null,
        },
      ],
    },
    {
      id: shortid.generate(),
      keyword_color: 'yellow',
      keyword_name: faker.name.findName(),
      post: [
        {
          id: shortid.generate(),
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
          id: shortid.generate(),
          content: '로그 로그로그로ㄹ로',
          createAt: '2021-09-25T16:01:14.883Z',
          updateAt: '2021-09-25T16:33:13.331Z',
          isFavorite: false,
          user_id: 1,
          tag_id: 1,
          keyword_id: 7,
          image: null,
        },
      ],
    },
  ],
};
initialState.postInKeyword = {
  post: [
    {
      id: shortid.generate(),
      image: faker.image.image(),
      content: faker.name.findName(),
      createAt: '2021-09-26T16:01:14.883Z',
    },
    {
      id: shortid.generate(),
      image: faker.image.image(),
      content: faker.name.findName(),
      createAt: '2021-09-26T16:01:14.883Z',
    },
    {
      id: shortid.generate(),
      image: faker.image.image(),
      content: faker.name.findName(),
      createAt: '2021-09-26T16:01:14.883Z',
    },
    {
      id: shortid.generate(),
      image: faker.image.image(),
      content: faker.name.findName(),
      createAt: '2021-09-26T16:01:14.883Z',
    },
  ],
};
const post = handleActions(
  {
    [CREATE_POST_SUCCESS]: (state, { payload: formData }) => ({
      ...state,
      formData,
    }),
    [CREATE_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [EDIT_POST_SUCCESS]: (state, { payload: formData }) => ({
      ...state,
      formData,
    }),
    [EDIT_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [POSTVIEW_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts,
    }),
    [POST_IN_KEYWORD_SUCCESS]: (state, { payload: postInKeyword }) => ({
      ...state,
      postInKeyword,
    }),
    [POST_IN_TAG_SUCCESS]: (state, { payload: postInTag }) => ({
      ...state,
      postInTag,
    }),

    //필터링 된 값들을 이미 저장된 postIntag-keyword 안에 새롭게 넣어서 리랜더링
    [FILTER_POST_IN_TAG_SUCCESS]: (state, { payload: filteredPost }) => {
      const keywordList = state.postInTag.keyword.map(
        ({ id, keyword_name, keyword_color }) => ({
          id,
          keyword_name,
          keyword_color,
          post: [],
        }),
      );
      console.log(filteredPost);
      // 2중for 문으로 필터링 받은 포스트id == keywordid 일 경우, KeywordList에 push
      filteredPost.forEach((post) => {
        for (let keyword in keywordList) {
          if (keywordList[keyword].id === post.keyword_id) {
            keywordList[keyword].post.push(post);
          }
        }
      });

      return {
        ...state,
        postInTag: { ...state.postInTag, keyword: keywordList },
      };
    },

    // [FILTER_POST_IN_KEYWORD_SUCCESS]: (state, { payload: filteredPost }) => {

    // return({
    //   postInTag: { post: filteredPost },

    //   ...state,
    // })
    // },

    [FILTER_POST_IN_TAG_FAILURE]: (state, { payload: failure }) => {
      console.log(failure);
      return {
        ...state,
      };
    },
  },
  initialState,
);

export default post;
