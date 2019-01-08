import {fork, all, take, call, put, actionChannel} from 'redux-saga/effects';
import {handleApiErrorAction} from '../../utils/api-util';

import {getArticleTypeListSuccess} from '../actions/article-type-actions';
import {getArticleTypeList} from '../services/article-type-services';
import Constants from '../../utils/constants';

const {
  GET_ARTICLE_TYPE_LIST
} = Constants.ACTIONS_NAME;

export default function* root() {
  yield all([
    fork(watchGetArticleTypeList)
  ]);
}

function* watchGetArticleTypeList() {
  const getArticleTypeListAction = yield actionChannel(GET_ARTICLE_TYPE_LIST);

  while (true) {
    yield take(getArticleTypeListAction);

    try {
      const context = yield call(getArticleTypeList);

      yield put(getArticleTypeListSuccess(context));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
}