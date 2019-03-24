import {fork, all, take, call, put, actionChannel} from 'redux-saga/effects';
import {handleApiErrorAction} from '../../utils/api-util';
import {getMyProfile, getMyPosts, getMyComments, getMyInfo} from '../services/profile-service';
import {getMyProfileSuccess, getMyPostsSuccess, getMyCommentsSuccess, getMyInfoSuccess} from '../actions/profile-actions';
import Constants from '../../utils/constants';

const {
  GET_MY_PROFILE,
  GET_MY_POSTS,
  GET_MY_COMMENTS,
  GET_MY_INFO
} = Constants.ACTIONS_NAME;

export default function* root() {
  yield all([
    fork(watchGetMyProfile),
    fork(watchGetMyPosts),
    fork(watchGetMyComment),
    fork(watchGetMyInfo)
  ]);
}

function* watchGetMyProfile() {
  const getMyProfileAction = yield actionChannel(GET_MY_PROFILE);

  while(true) {
    const req = yield take(getMyProfileAction);

    try{
      const context = yield call(getMyProfile, req.data);

      yield put(getMyProfileSuccess(context));
    } catch(e) {
      yield put(handleApiErrorAction(e));
    }
  }
}

function* watchGetMyPosts() {
  const getMyPostsAction = yield actionChannel(GET_MY_POSTS);

  while(true) {
    const req = yield take(getMyPostsAction);

    try{
      const context = yield call(getMyPosts, req.data);

      yield put(getMyPostsSuccess(context));
    } catch(e) {
      yield put(handleApiErrorAction(e));
    }
  }
}

function* watchGetMyComment() {
  const getMyCommentAction = yield actionChannel(GET_MY_COMMENTS);

  while(true) {
    const req = yield take(getMyCommentAction);

    try{
      const context = yield call(getMyComments, req.data);

      yield put(getMyCommentsSuccess(context));
    } catch(e) {
      yield put(handleApiErrorAction(e));
    }
  }
}

function* watchGetMyInfo() {
  const getMyInfoAction = yield actionChannel(GET_MY_INFO);

  while(true) {
    const req = yield take(getMyInfoAction);

    try{
      const context = yield call(getMyInfo, req.data);

      yield put(getMyInfoSuccess(context));
    } catch(e) {
      yield put(handleApiErrorAction(e));
    }
  }
}