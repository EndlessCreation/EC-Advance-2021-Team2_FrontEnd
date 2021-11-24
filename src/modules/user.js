import * as authAPI from '../api/auth';
import { createAction, handleActions } from 'redux-actions';
import { createActionType, createRequestSaga } from '../lib/utils';
import { takeLatest } from '@redux-saga/core/effects';

const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createActionType('user/CHECK');
const LOGOUT = 'auth/LOGOUT';
const [UPDATE_PASSWORD, UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAILURE] =
  createActionType('auth/UPDATE_PASSWORD');

export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

export const updatePassword = createAction(
  UPDATE_PASSWORD,
  ({ id, existing_password, new_password, check_password }) => ({
    id,
    existing_password,
    new_password,
    check_password,
  }),
);

const checkSaga = createRequestSaga(CHECK, authAPI.check);
const logoutSaga = createRequestSaga(LOGOUT, authAPI.logout);
const updatePasswordSaga = createRequestSaga(
  UPDATE_PASSWORD,
  authAPI.updatePassword,
);

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(UPDATE_PASSWORD, updatePasswordSaga);
}

const initialState = {
  user: null,
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
      user: null,
      checkError: error,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
    [UPDATE_PASSWORD_SUCCESS]: (state) => ({
      ...state,
    }),
  },
  initialState,
);

export default user;
