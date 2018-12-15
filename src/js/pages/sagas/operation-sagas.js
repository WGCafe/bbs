import {fork, all, take, call, put, actionChannel} from 'redux-saga/effects';
import {handleApiErrorAction} from '../../utils/api-util';

import {getCollectionListSuccess} from '../actions/operation-actions';
import {getCollectionList} from '../services/article-type-services';
import Constants from '../../utils/constants';

const {
  GET_COLLECTION_LIST
} = Constants.ACTIONS_NAME;

export default function* root() {
  yield all([
    fork(watchGetCollectionList)
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