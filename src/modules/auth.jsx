import { createAction, handleActions } from 'redux-actions';
import { takeEvery } from 'redux-saga/effects';
import * as authAPI from '../api/auth';
import { createRequestSaga } from '../lib/utils';

const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const CHANGE_FIELD = 'auth/CHANGE_FIELD';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

const LOGOUT = 'auth/LOGOUT';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';

const SIGNUP = 'auth/SIGNUP';
const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'auth/SIGNUP_FAILURE';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value }),
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const login = createAction(LOGIN, (email, password) => ({
  email,
  password,
}));
export const logout = createAction(LOGOUT);
export const signup = createAction(SIGNUP, ({ name, email, password }) => ({
  name,
  email,
  password,
}));

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const logoutSaga = createRequestSaga(LOGOUT, authAPI.logout);
const signupSaga = createRequestSaga(SIGNUP, authAPI.signup);

export function* authSaga() {
  yield takeEvery(LOGIN, loginSaga);
  yield takeEvery(LOGOUT, logoutSaga);
  yield takeEvery(SIGNUP, signupSaga);
}

const initialState = {
  signup: {
    email: '',
    name: '',
    nickname: '',
    password: '',
    passwordConfirm: '',
    phonenumber: '',
    account: '',
  },
  login: {
    email: '',
    password: '',
  },
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => ({}),
    [LOGIN_SUCCESS]: (state, { payload: email, password }) => ({
      ...state,
      login: {
        ...state.login,
        email,
        password,
      },
    }),
    [SIGNUP_SUCCESS]: (state, { payload: name, email, password }) => ({
      ...state,
      signup: {
        ...state.signup,
      },
    }),
  },
  initialState,
);

export default auth;
