import {fork, all, take, call, put, actionChannel} from 'redux-saga/effects';
import {handleApiErrorAction} from '../../utils/api-util';

import {getArticleListSuccess, getArticleSuccess} from '../actions/article-actions';
import {getArticleList, getArticle} from '../services/article-services';
import Constants from '../../utils/constants';

const {
  GET_ARTICLE_LIST,
  GET_ARTICLE
} = Constants.ACTIONS_NAME;

export default function* root() {
  yield all([
    fork(watchGetArticleList),
    fork(watchGetArticle)
  ]);
}

function* watchGetArticleList() {
  const getArticleListAction = yield actionChannel(GET_ARTICLE_LIST);

  while (true) {
    const req = yield take(getArticleListAction);

    try {
      const context = yield call(getArticleList, req);

      yield put(getArticleListSuccess(context.results));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
}

function* watchGetArticle() {
  const getArticleAction = yield actionChannel(GET_ARTICLE);

  while (true) {
    const req = yield take(getArticleAction);

    try {
      const context = yield call(getArticle, req);

      yield put(getArticleSuccess(context.results));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
}