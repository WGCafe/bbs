import {fork, all, take, call, put, actionChannel} from 'redux-saga/effects';
import {handleApiErrorAction} from '../../utils/api-util';
import {userSignUpSuccess, isUserAuthenticated, userSignInSuccess} from '../actions/user-actions';
import {userSignUp, userSignIn} from '../services/user-service';
import Constants from '../../utils/constants';

const {
  CHECK_USER_AUTHENTICATION,
  GET_USER_SIGN_UP,
  GET_USER_SIGN_IN
} = Constants.ACTIONS_NAME;

export default function* root() {
  yield all([
    fork(watchUserSignUp),
    fork(checkUserAuthentication),
    fork(watchUserSignIn)
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

function* watchUserSignIn() {
  const userSignInAction = yield actionChannel(GET_USER_SIGN_IN);

  while (true) {
    const req = yield take(userSignInAction);

    try {
      const context = yield call(userSignIn, req.data);

      yield put(userSignInSuccess(context));
      yield put(isUserAuthenticated({isLogin: true}));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
}