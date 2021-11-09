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

const FAVOURITE_POST = 'post/FAVOURITE_POST';

const [POST_IN_KEYWORD, POST_IN_KEYWORD_SUCCESS, POST_IN_KEYWORD_FAILURE] =
  createActionType('post/POST_IN_KEYWORD');
const [POST_IN_TAG, POST_IN_TAG_SUCCESS, POST_IN_TAG_FAILURE] =
  createActionType('post/POST_IN_TAG');

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

export function* postSaga() {
  yield takeLatest(CREATE_POST, createPostSaga);
  yield takeLatest(EDIT_POST, editPostSaga);
  yield takeLatest(DELETE_POST, deletePostSaga);
  yield takeLatest(FAVOURITE_POST, favoritePostSaga);
  yield takeLatest(POSTVIEW, getPostViewSaga);
  yield takeLatest(POST_IN_KEYWORD, getPostInKeywordSaga);
  yield takeLatest(POST_IN_TAG, getPostInTagSaga);
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
  },
  initialState,
);

export default post;
