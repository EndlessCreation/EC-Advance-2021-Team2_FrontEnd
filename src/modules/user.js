import * as authAPI from '../api/auth';
import { createAction, handleActions } from 'redux-actions';
import { createActionType, createRequestSaga } from '../lib/utils';
import { takeLatest } from '@redux-saga/core/effects';

const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createActionType('user/CHECK');
const LOGOUT = 'auth/LOGOUT';

export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);
const logoutSaga = createRequestSaga(LOGOUT, authAPI.logout);

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  user: 1,
  checkError: null,
};

export const user = handleActions(
  {
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      // user: null,
      checkError: error,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initialState,
);

export default user;
