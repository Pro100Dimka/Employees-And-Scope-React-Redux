import { takeEvery, put, all } from 'redux-saga/effects';
import api from '../api/api';
import { apiActions, API_ACTIONS } from './actions';

export function* onApiLoad({ payload, type }) {
  const actionType = type.replace(API_ACTIONS.FETCH_START, '').toLowerCase();
  try {
    const responce = yield api.fetch(actionType, payload);
    yield put(apiActions.fetchSuccess(actionType, responce));
  } catch (error) {
    yield put(apiActions.fetchFailure(actionType, error));
  }
}

export function* watchApiLoad() {
  yield takeEvery(
    (action) => action.type.startsWith(API_ACTIONS.FETCH_START),
    onApiLoad
  );
}
export default function* apiRootSaga() {
  yield all([watchApiLoad()]);
}

// api
// .fetch(actionType, payload)
// .then((res) => {
//   put(apiActions.fetchSuccess(actionType, res));
// })
// .catch((error) => {
//   put(apiActions.fetchFailure(actionType, error));
// });
