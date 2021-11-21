import { createAction, handleActions } from 'redux-actions';
import { createRequestSaga } from '../lib/utils';
import * as tagkeywordAPI from '../api/tagkeyword';
import { takeLatest } from '@redux-saga/core/effects';
import shortid from 'shortid';
import faker from 'faker';

const GET_TAG = 'tagkeyword/GET_TAG';
const GET_TAG_SUCCESS = 'tagkeyword/GET_TAG_SUCCESS';

const GET_KEYWORD_IN_TAG = 'tagkeyword/GET_KEYWORD_IN_TAG';
const GET_KEYWORD_IN_TAG_SUCCESS = 'tagkeyword/GET_KEYWORD_IN_TAG_SUCCESS';

export const getTag = createAction(GET_TAG);
export const getKeywordInTag = createAction(
  GET_KEYWORD_IN_TAG,
  (tagId) => tagId,
);
// 특정 태그(tagId)에 있는 키워드만 받아옴
const getTagSaga = createRequestSaga(GET_TAG, tagkeywordAPI.getTagKeyword);
// 특정 태그(tagId)에 있는 키워드만 받아옴
const getKeywordInTagSaga = createRequestSaga(
  GET_KEYWORD_IN_TAG,
  tagkeywordAPI.getKeywordInTag,
);

export function* tagkeywordSaga() {
  yield takeLatest(GET_TAG, getTagSaga);
  yield takeLatest(GET_KEYWORD_IN_TAG, getKeywordInTagSaga);
}

const initialState = {
  tags: [],
  keywordInTag: null,
};
// DUMMY DATA : 나중에 삭제할 예정입니다.
// initialState.tags = [
//   {
//     id: 2,
//     tag: 'tag',
//     tag_color: 'grey',
//     createAt: '2021-11-20T06:49:04.685Z',
//     updateAt: '2021-11-20T06:49:04.685Z',
//     author_id: 2,
//     keyword: [
//       {
//         id: 2,
//         keyword_name: 'key',
//         keyword_color: 'yellow',
//         createAt: '2021-11-20T06:49:04.697Z',
//         updateAt: '2021-11-20T06:49:04.698Z',
//         parent_tag_id: 2,
//       },
//     ],
//   },
//   {
//     id: 1,
//     tag: '오정진',
//     tag_color: 'indigo',
//     createAt: '2021-11-20T06:48:34.852Z',
//     updateAt: '2021-11-20T06:48:34.852Z',
//     author_id: 2,
//     keyword: [
//       {
//         id: 1,
//         keyword_name: 'key1',
//         keyword_color: 'red',
//         createAt: '2021-11-20T06:48:34.903Z',
//         updateAt: '2021-11-20T06:48:34.904Z',
//         parent_tag_id: 1,
//       },
//     ],
//   },
// ];
// initialState.keywordInTag = {
//   id: 2,
//   tag: 'tag',
//   tag_color: 'grey',
//   createAt: '2021-11-20T06:49:04.685Z',
//   updateAt: '2021-11-20T06:49:04.685Z',
//   author_id: 2,
//   keyword: [
//     {
//       id: 2,
//       keyword_name: 'key',
//       keyword_color: 'yellow',
//       createAt: '2021-11-20T06:49:04.697Z',
//       updateAt: '2021-11-20T06:49:04.698Z',
//       parent_tag_id: 2,
//     },
//   ],
// };
const tagkeyword = handleActions(
  {
    [GET_TAG_SUCCESS]: (state, { payload: { all_tag_keyword } }) => ({
      ...state,
      tags: all_tag_keyword,
    }),
    [GET_KEYWORD_IN_TAG_SUCCESS]: (state, { payload: keywordInTag }) => ({
      ...state,
      keywordInTag,
    }),
  },
  initialState,
);

export default tagkeyword;
