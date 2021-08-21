import { call, put } from 'redux-saga/effects';

export const createRequestSaga = (type, request) => {
  const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`];
  return function* (action) {
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
  };
};
