import { createAction, handleActions } from 'redux-actions';
import { createRequestSaga } from '../lib/utils';
import * as searchAPI from '../api/search';
import { takeLatest } from '@redux-saga/core/effects';

const [SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE] = 'tagkeyword/SEARCH';

export const search = createAction(SEARCH);

const searchSaga = createRequestSaga(SEARCH, searchAPI.search);

export function* tagkeywordSaga() {
  yield takeLatest(SEARCH, searchSaga);
}

const initialState = {
  posts: null,
};

const tagkeyword = handleActions(
  {
    [SEARCH_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts: posts,
    }),
  },
  initialState,
);

export default tagkeyword;
