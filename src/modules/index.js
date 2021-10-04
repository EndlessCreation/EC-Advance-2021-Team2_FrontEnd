import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import auth, { authSaga } from './auth';
import post, { postSaga } from './post';
import tagkeyword, { tagkeywordSaga } from './tagkeyword';
import user, { userSaga } from './user';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  post,
  tagkeyword,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), postSaga(), tagkeywordSaga()]);
}

export default rootReducer;
