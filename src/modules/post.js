import { createAction, handleActions } from 'redux-actions';
import { createActionType, createRequestSaga } from '../lib/utils';
import { takeLatest } from '@redux-saga/core/effects';
import * as postAPI from '../api/post';

const [CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE] =
  createActionType('post/CREATE_POST');
const [EDIT_POST, EDIT_POST_SUCCESS, EDIT_POST_FAILURE] =
  createActionType('post/EDIT_POST');
const DELETE_POST = 'post/DELETE_POST';
const [POSTVIEW, POSTVIEW_SUCCESS, POSTVIEW_FAILURE] =
  createActionType('post/POSTVIEW');
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

    //필터링 된 값도 postIntag, postInKeyword에 넣어주어서 필터링 구현
    [FILTER_POST_IN_TAG_SUCCESS]: (state, { payload: filteredPost }) => ({
      ...state,
      postInTag: { ...state.postInTag, post: filteredPost },
    }),
    [FILTER_POST_IN_KEYWORD_SUCCESS]: (state, { payload: filteredPost }) => ({
      postInTag: { post: filteredPost },

      ...state,
    }),
    [FILTER_POST_IN_TAG_FAILURE]: (state, { payload: postInKeyword }) => {
      console.log(postInKeyword);
      return {
        ...state,
      };
    },
  },
  initialState,
);

export default post;
