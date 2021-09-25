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
const [CREATE_TAG, CREATE_TAG_SUCCESS, CREATE_TAG_FAILURE] =
  createActionType('post/CREATE_TAG');
const [EDIT_TAG, EDIT_TAG_SUCCESS, EDIT_TAG_FAILURE] =
  createActionType('post/EDIT_TAG');
const [DELETE_TAG, DELETE_TAG_SUCCESS, DELETE_TAG_FAILURE] =
  createActionType('post/DELETE_TAG');
const [CREATE_KEYWORD, CREATE_KEYWORD_SUCCESS, CREATE_KEYWORD_FAILURE] =
  createActionType('post/CREATE_KEYWORD');
const [EDIT_KEYWORD, EDIT_KEYWORD_SUCCESS, EDIT_KEYWORD_FAILURE] =
  createActionType('post/EDIT_KEYWORD');
const [DELETE_KEYWORD, DELETE_KEYWORD_SUCCESS, DELETE_KEYWORD_FAILURE] =
  createActionType('post/DELETE_KEYWORD');

export const createPost = createAction(CREATE_POST, (formData) => formData);
export const editPost = createAction(EDIT_POST, (formData) => formData);
export const deletePost = createAction(DELETE_POST, (post_id) => post_id);
export const getPostView = createAction(POSTVIEW);
export const createTag = createAction(CREATE_TAG, ({ tag, tagColor }) => ({
  tag,
  tagColor,
}));
export const editTag = createAction(EDIT_TAG, ({ tagId, tag, tagColor }) => ({
  tagId,
  tag,
  tagColor,
}));
export const deleteTag = createAction(DELETE_TAG, (tagId) => tagId);
export const createKeyword = createAction(
  CREATE_KEYWORD,
  ({ tagId, keyword, keywordColor }) => ({ tagId, keyword, keywordColor }),
);
export const editKeyword = createAction(
  EDIT_KEYWORD,
  ({ keywordId, keyword, keywordColor, tagId }) => ({
    keywordId,
    keyword,
    keywordColor,
    tagId,
  }),
);
export const deleteKeyword = createAction(
  DELETE_KEYWORD,
  ({ tagId, keywordId }) => ({ tagId, keywordId }),
);

const createPostSaga = createRequestSaga(CREATE_POST, postAPI.createPost);
const editPostSaga = createRequestSaga(EDIT_POST, postAPI.editPost);
const deletePostSaga = createRequestSaga(DELETE_POST, postAPI.deletePost);
const getPostViewSaga = createRequestSaga(POSTVIEW, postAPI.getPostView);
const createTagSaga = createRequestSaga(CREATE_TAG, postAPI.createTag);
const editTagSaga = createRequestSaga(EDIT_TAG, postAPI.editTag);
const deleteTagSaga = createRequestSaga(DELETE_TAG, postAPI.deleteTag);
const createKeywordSaga = createRequestSaga(
  CREATE_KEYWORD,
  postAPI.createKeyword,
);
const editKeywordSaga = createRequestSaga(EDIT_KEYWORD, postAPI.editKeyword);
const deleteKeywordSaga = createRequestSaga(
  DELETE_KEYWORD,
  postAPI.deleteKeyword,
);

export function* postSaga() {
  yield takeLatest(CREATE_POST, createPostSaga);
  yield takeLatest(EDIT_POST, editPostSaga);
  yield takeLatest(DELETE_POST, deletePostSaga);
  yield takeLatest(POSTVIEW, getPostViewSaga);
  yield takeLatest(CREATE_TAG, createTagSaga);
  yield takeLatest(EDIT_TAG, editTagSaga);
  yield takeLatest(DELETE_TAG, deleteTagSaga);
  yield takeLatest(CREATE_KEYWORD, createKeywordSaga);
  yield takeLatest(EDIT_KEYWORD, editKeywordSaga);
  yield takeLatest(DELETE_KEYWORD, deleteKeywordSaga);
}

const initialState = {
  formData: null,
  error: null,
  posts: null,
  tagInfo: null,
  keywordInfo: null,
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
    [CREATE_TAG_SUCCESS]: (state, { payload: tagInfo }) => ({
      ...state,
      tagInfo,
    }),
    [CREATE_KEYWORD_SUCCESS]: (state, { payload: keywordInfo }) => ({
      ...state,
      keywordInfo,
    }),
  },
  initialState,
);

export default post;
