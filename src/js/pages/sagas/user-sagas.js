import {fork, all, take, call, put, actionChannel} from 'redux-saga/effects';
import {handleApiErrorAction} from '../../utils/api-util';
import {userSignUpSuccess, isUserAuthenticated} from '../actions/user-actions';
import {userSignUp} from '../services/user-service';
import Constants from '../../utils/constants';

const {
  CHECK_USER_AUTHENTICATION,
  GET_USER_SIGN_UP
} = Constants.ACTIONS_NAME;

export default function* root() {
  yield all([
    fork(watchUserSignUp),
    fork(checkUserAuthentication)
  ]);
}

function* checkUserAuthentication() {
  const checkIsLogin = yield actionChannel(CHECK_USER_AUTHENTICATION);

  while (true) {
    const req = yield take(checkIsLogin);
    const isLogin = req.data.userToken ? true : false;

    yield put(isUserAuthenticated({isLogin}));
  }
}

function* watchUserSignUp() {
  const userSignUpAction = yield actionChannel(GET_USER_SIGN_UP);

  while (true) {
    const req = yield take(userSignUpAction);

    try {
      const context = yield call(userSignUp, req.data);

      yield put(userSignUpSuccess(context));
      yield put(isUserAuthenticated({isLogin: true}));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
}