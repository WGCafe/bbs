import {fork, all, take, call, put, actionChannel} from 'redux-saga/effects';
import {handleApiErrorAction} from '../../utils/api-util';
import {getMyProfile} from '../services/profile-service';
import {getMyProfileSuccess} from '../actions/profile-actions';
import Constants from '../../utils/constants';

const {
  GET_MY_PROFILE
} = Constants.ACTIONS_NAME;

export default function* root() {
  yield all([
    fork(watchGetMyProfile)
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