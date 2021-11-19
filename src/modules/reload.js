import {
  all,
  put,
  take,
  takeEvery,
  takeLatest,
} from '@redux-saga/core/effects';
import { createAction, handleActions } from 'redux-actions';

//액션
const RELOAD_START = 'reload/RELOAD_START';
const RELOAD_END = 'reload/RELOAD_END';
const INIT_RELOAD = 'reload/INIT_RELOAD';

//액션 생성함수
//액션과 페이로드
export const reloadAction = createAction(RELOAD_START, (type) => type);
export const initReloadAction = createAction(INIT_RELOAD);

//사가
//로직작동하는곳
function* reRenderSaga({ payload }) {
  yield take('loading/FINISH_LOADING');
  yield put({ type: RELOAD_END, payload: payload });
  yield put({ type: INIT_RELOAD });
}

//모니터링 사가
export function* reloadSaga() {
  yield takeLatest(RELOAD_START, reRenderSaga);
}

//리듀서
//액션에 명시된 값과 사가에 적힌 로직대로 실행
//이때 값은 두번째 인자 action 에 {type , payload}로 담긴다.
//리턴값을 스토어에 저장.
const initialState = {};
const reload = handleActions(
  {
    [RELOAD_START]: (state, action) => ({ ...state, [action.payload]: false }),
    [RELOAD_END]: (state, action) => ({ ...state, [action.payload]: true }),
    [INIT_RELOAD]: (state, action) => null,
  },
  initialState,
);

export default reload;
