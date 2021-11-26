import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../api/auth';
import { createRequestSaga, createActionType } from '../lib/utils';
import { produce } from 'immer';

const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] =
  createActionType('auth/SIGNUP');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createActionType('auth/LOGIN');
const [CHECK_EMAIL, CHECK_EMAIL_SUCCESS, CHECK_EMAIL_FAILURE] =
  createActionType('auth/CHECK_EMAIL');
const [CHECK_NICKNAME, CHECK_NICKNAME_SUCCESS, CHECK_NICKNAME_FAILURE] =
  createActionType('auth/CHECK_NICKNAME');
const [CHECK_ACCOUNT, CHECK_ACCOUNT_SUCCESS, CHECK_ACCOUNT_FAILURE] =
  createActionType('auth/CHECK_ACCOUNT');
const INIT_AUTH = 'auth/INIT_AUTH';
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const signup = createAction(
  SIGNUP,
  ({ email, name, nickname, password, account, phone_number }) => ({
    email,
    name,
    nickname,
    password,
    account,
    phone_number,
  }),
);
export const login = createAction(LOGIN, ({ account, password }) => ({
  account,
  password,
}));
export const checkEmail = createAction(CHECK_EMAIL, (email) => email);
export const checkNickname = createAction(
  CHECK_NICKNAME,
  (nickname) => nickname,
);
export const checkAccount = createAction(CHECK_ACCOUNT, (account) => account);
export const initAuth = createAction(INIT_AUTH);

const signupSaga = createRequestSaga(SIGNUP, authAPI.signup);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const checkEmailSaga = createRequestSaga(CHECK_EMAIL, authAPI.checkEmail);
const checkNicknameSaga = createRequestSaga(
  CHECK_NICKNAME,
  authAPI.checkNickname,
);
const checkAccoutSaga = createRequestSaga(CHECK_ACCOUNT, authAPI.checkAccount);

export function* authSaga() {
  yield takeLatest(SIGNUP, signupSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(CHECK_EMAIL, checkEmailSaga);
  yield takeLatest(CHECK_NICKNAME, checkNicknameSaga);
  yield takeLatest(CHECK_ACCOUNT, checkAccoutSaga);
}

const initialState = {
  signup: {
    email: '',
    name: '',
    nickname: '',
    password: '',
    passwordConfirm: '',
    account: '',
    phone_number: '',
    signupSuccess: false,
  },
  login: {
    account: '',
    password: '',
  },
  emailChecked: null,
  nicknameChecked: null,
  accountChecked: null,
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null,
    }),
    [SIGNUP_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      signup: { signupSuccess: true },
    }),
    [SIGNUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [CHECK_EMAIL_SUCCESS]: (state, { payload: emailChecked }) => ({
      ...state,
      emailChecked,
    }),
    [CHECK_NICKNAME_SUCCESS]: (state, { payload: nicknameChecked }) => ({
      ...state,
      nicknameChecked,
    }),
    [CHECK_ACCOUNT_SUCCESS]: (state, { payload: accountChecked }) => ({
      ...state,
      accountChecked,
    }),
    [INIT_AUTH]: () => initialState,
  },
  initialState,
);

export default auth;
