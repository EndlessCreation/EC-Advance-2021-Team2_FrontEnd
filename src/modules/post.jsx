import { createAction, handleActions } from 'redux-actions';
import { createActionType, createRequestSaga } from '../lib/utils';
import * as postAPI from '../api/post';
import { takeLatest } from '@redux-saga/core/effects';
const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] =
  createActionType('post/WRITE_POST');
const [EDIT_POST, EDIT_POST_SUCCESS, EDIT_POST_FAILURE] =
  createActionType('post/EDIT_POST');
const [DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE] =
  createActionType('post/DELETE_POST');

export const writePost = createAction(WRITE_POST, (formData) => formData);
export const editPost = createAction(EDIT_POST, ({ content, post_id }) => ({
  content,
  post_id,
}));
export const deletePost = createAction(DELETE_POST, ({ post_id }) => ({
  post_id,
}));

const writePostSaga = createRequestSaga(WRITE_POST, postAPI.writePost);
const editPostSaga = createRequestSaga(EDIT_POST, postAPI.editPost);
const deletePostSaga = createRequestSaga(DELETE_POST, postAPI.deletePost);

export function* postSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(EDIT_POST, editPostSaga);
  yield takeLatest(DELETE_POST, deletePostSaga);
}

const initialState = {
  formData: null,
  post: {
    content: null,
    post_id: null,
  },
  postError: null,
};
const post = handleActions(
  {
    [WRITE_POST_SUCCESS]: (state, { payload: formData }) => ({
      ...state,
      formData,
    }),
    [WRITE_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      postError: error,
    }),
    [EDIT_POST_SUCCESS]: (state, { payload: { content, post_id } }) => ({
      ...state,
      post: {
        ...state.post,
        content,
        post_id,
      },
    }),
  },
  initialState,
);

export default post;
