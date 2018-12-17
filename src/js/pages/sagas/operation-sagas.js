import {fork, all, take, call, put, actionChannel} from 'redux-saga/effects';
import {handleApiErrorAction} from '../../utils/api-util';

import {
  getCollectionListSuccess,
  submitedCollection
} from '../actions/operation-actions';
import {
  getCollectionList,
  submitCollection
} from '../services/operation-services';
import Constants from '../../utils/constants';

const {
  GET_COLLECTION_LIST,
  SUBMIT_COLLECTION
} = Constants.ACTIONS_NAME;

export default function* root() {
  yield all([
    fork(watchGetCollectionList),
    fork(watchCollection)
  ]);
}

function* watchGetCollectionList() {
  const getCollectionListAction = yield actionChannel(GET_COLLECTION_LIST);

  while (true) {
    const req = yield take(getCollectionListAction);

    try {
      const context = yield call(getCollectionList, req);

      yield put(getCollectionListSuccess(context));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
}

export function* watchCollection() {
  const submitCollectionAction = yield actionChannel(SUBMIT_COLLECTION);

  while (true) {
    let req = yield take(submitCollectionAction);

    try {
      const status = yield call(submitCollection, req);

      yield put(submitedCollection(status));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
}