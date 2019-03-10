import {fork, all, take, call, put, actionChannel} from 'redux-saga/effects';
import {handleApiErrorAction} from '../../utils/api-util';
import {getMyProfile, getMyPost} from '../services/profile-service';
import {getMyProfileSuccess, getMyPostSuccess, getUserInfoSuccess} from '../actions/profile-actions';
import Constants from '../../utils/constants';

const {
  GET_MY_PROFILE,
  GET_MY_POST,
  GET_USER_INFO
} = Constants.ACTIONS_NAME;

export default function* root() {
  yield all([
    fork(watchGetMyProfile),
    fork(watchGetMyPost),
    fork(watchGetUserInfo)
  ]);
}

function *watchGetUserInfo() {
  const getUserInfo = yield actionChannel(GET_USER_INFO);

  while(true) {
    const req = yield take(getUserInfo);

    try {
      const context = yield all({
        myProfile: call(getMyProfile, req.data),
        myPosts: call(getMyPost, req.data)
      });

      yield put(getUserInfoSuccess(context));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
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

function* watchGetMyPost() {
  const getMyPostAction = yield actionChannel(GET_MY_POST);

  while(true) {
    const req = yield take(getMyPostAction);

    try{
      const context = yield call(getMyPost, req.data);

      yield put(getMyPostSuccess(context));
    } catch(e) {
      yield put(handleApiErrorAction(e));
    }
  }
}