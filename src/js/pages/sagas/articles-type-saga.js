import {fork, all, take, call, put, actionChannel} from 'redux-saga/effects';
import {handleApiErrorAction} from '../../utils/api-util';

import {getArticleTypeListSuccess} from '../actions/articles-type-actions';
import {getArticleTypeList} from '../services/articles-type-service';
import Constants from '../../utils/constants';

const {
  GET_ARTICLES_TYPE_LIST
} = Constants.ACTIONS_NAME;

export default function* root() {
  yield all([
    fork(watchGetArticleTypeList)
  ]);
}

function* watchGetArticleTypeList() {
  const getArticleTypeListAction = yield actionChannel(GET_ARTICLES_TYPE_LIST);

  while (true) {
    const req = yield take(getArticleTypeListAction);

    try {
      const context = yield call(getArticleTypeList, req);

      yield put(getArticleTypeListSuccess(context));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
}