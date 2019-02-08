import {fork, all, take, call, put, actionChannel} from 'redux-saga/effects';
import {handleApiErrorAction} from '../../utils/api-util';

import {
  getArticleListSuccess,
  deleteArticleSuccess,
  getArticleSuccess,
  reportArticleSuccess
} from '../actions/article-actions';
import {
  getArticleList,
  createArticle,
  deleteArticle,
  getArticle,
  reportArticle
} from '../services/article-services';
import {getCommentListSuccess} from '../actions/comment-actions';
import {getCommentList} from '../services/comment-services';
import Constants from '../../utils/constants';

const {
  GET_ARTICLE_LIST,
  CREATE_ARTICLE,
  DELETE_ARTICLE,
  GET_ARTICLE,
  REPORT_ARTICLE
} = Constants.ACTIONS_NAME;

export default function* root() {
  yield all([
    fork(watchGetArticleList),
    fork(watchCreateArticle),
    fork(watchDeleteArticle),
    fork(watchGetArticle),
    fork(watchReportArticle)
  ]);
}

function* watchGetArticleList() {
  const getArticleListAction = yield actionChannel(GET_ARTICLE_LIST);

  while (true) {
    const req = yield take(getArticleListAction);

    try {
      const context = yield call(getArticleList, req.options);

      yield put(getArticleListSuccess(context));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
}

function* watchCreateArticle() {
  const createArticleAction = yield actionChannel(CREATE_ARTICLE);

  while (true) {
    const req = yield take(createArticleAction);

    try {
      const context = yield call(createArticle, req.options);

      yield put(getArticleSuccess(context));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
}

function* watchDeleteArticle() {
  const deleteArticleAction = yield actionChannel(DELETE_ARTICLE);

  while (true) {
    const req = yield take(deleteArticleAction);

    try {
      const context = yield call(deleteArticle, req.options);

      context.isDeleted = true;

      yield put(deleteArticleSuccess(context));
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
      const article = yield call(getArticle, req.options);
      const comments = yield call(getCommentList, {article_id: req.options.article_id});

      yield put(getArticleSuccess(article));
      yield put(getCommentListSuccess(comments));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
}

function* watchReportArticle() {
  const reportArticleAction = yield actionChannel(REPORT_ARTICLE);

  while (true) {
    const req = yield take(reportArticleAction);

    try {
      const context = yield call(reportArticle, req.options);

      yield put(reportArticleSuccess(context));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
}