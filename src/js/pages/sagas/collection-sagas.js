import {fork, all, take, call, put, actionChannel} from 'redux-saga/effects';
import {handleApiErrorAction} from '../../utils/api-util';

import {
  createCollectionSuccess,
  deleteCollectionSuccess,
  getCollectionListSuccess,
  submitedCollection
} from '../actions/collection-actions';
import {
  createCollection,
  deleteCollection,
  getCollectionList,
  submitCollection
} from '../services/collection-services';
import Constants from '../../utils/constants';

const {
  CREATE_COLLECTION,
  DELETED_COLLECTION,
  GET_COLLECTION_LIST,
  SUBMIT_COLLECTION
} = Constants.ACTIONS_NAME;

export default function* root() {
  yield all([
    fork(watchCreateCollection),
    fork(watchDeleteCollection),
    fork(watchGetCollectionList),
    fork(watchCollection)
  ]);
}

function* watchCreateCollection() {
  const createCollectionAction = yield actionChannel(CREATE_COLLECTION);

  while (true) {
    const req = yield take(createCollectionAction);

    try {
      const context = yield call(createCollection, req);

      yield put(createCollectionSuccess(context));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
}

function* watchDeleteCollection() {
  const deleteCollectionAction = yield actionChannel(DELETED_COLLECTION);

  while (true) {
    const req = yield take(deleteCollectionAction);

    try {
      const context = yield call(deleteCollection, req);

      yield put(deleteCollectionSuccess(context));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
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