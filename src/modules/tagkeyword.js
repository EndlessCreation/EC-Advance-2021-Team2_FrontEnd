import { createAction, handleActions } from 'redux-actions';
import { createRequestSaga } from '../lib/utils';
import * as tagkeywordAPI from '../api/tagkeyword';
import { takeLatest } from '@redux-saga/core/effects';

const GET_TAG = 'tagkeyword/GET_TAG';
const GET_TAG_SUCCESS = 'tagkeyword/GET_TAG_SUCCESS';

const GET_KEYWORD_IN_TAG = 'tagkeyword/GET_KEYWORD_IN_TAG';
const GET_KEYWORD_IN_TAG_SUCCESS = 'tagkeyword/GET_KEYWORD_IN_TAG_SUCCESS';

export const getTag = createAction(GET_TAG);
export const getKeywordInTag = createAction(GET_KEYWORD_IN_TAG, (tagId) => tagId);

const getTagSaga = createRequestSaga(GET_TAG, tagkeywordAPI.getTagKeyword);
const getKeywordInTagSaga = createRequestSaga(GET_KEYWORD_IN_TAG, tagkeywordAPI.getKeywordInTag);

export function* tagkeywordSaga() {
  yield takeLatest(GET_TAG, getTagSaga);
  yield takeLatest(GET_KEYWORD_IN_TAG, getKeywordInTagSaga);
}

const initialState = {
  tags: null,
  keyword: null,
};

const tagkeyword = handleActions(
  {
    [GET_TAG_SUCCESS]: (state, { payload: { all_tag_keyword } }) => ({
      ...state,
      tags: all_tag_keyword,
    }),
    [GET_KEYWORD_IN_TAG_SUCCESS]: (state, { payload: { keyword } }) => ({
      ...state,
      keyword,
    }),
  },
  initialState,
);

export default tagkeyword;
