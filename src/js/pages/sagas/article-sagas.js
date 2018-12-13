import {fork, all, take, call, put, actionChannel} from 'redux-saga/effects';
import {handleApiErrorAction} from '../../utils/api-util';

import {getArticleListSuccess} from '../actions/article-actions';
import {getArticleList} from '../services/article-services';
import Constants from '../../utils/constants';

const {
  GET_ARTICLE_LIST
} = Constants.ACTIONS_NAME;

export default function* root() {
  yield all([
    fork(watchGetArticleList)
  ]);
}

function* watchGetArticleList() {
  const getArticleListAction = yield actionChannel(GET_ARTICLE_LIST);

  while (true) {
    const req = yield take(getArticleListAction);

    try {
      const context = yield call(getArticleList, req);

      yield put(getArticleListSuccess(context));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
}