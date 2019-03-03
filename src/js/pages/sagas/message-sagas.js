import {fork, all, take, call, put, actionChannel} from 'redux-saga/effects';
import {handleApiErrorAction} from '../../utils/api-util';

import {messageListSuccess, messageRead, messageDeleted} from '../actions/message-actions';
import {getMessageList, readMessage, deleteMessage} from '../services/message-services';
import Constants from '../../utils/constants';

const {
  GET_MESSAGE_LIST,
  READ_MESSAGE,
  DELETE_MESSAGE
} = Constants.ACTIONS_NAME;

export default function* root() {
  yield all([
    fork(watchGetMessageList),
    fork(watchReadMessage),
    fork(watchDeleteMessage)
  ]);
}

function* watchGetMessageList() {
  const getMessageListAction = yield actionChannel(GET_MESSAGE_LIST);

  while (true) {
    const action = yield take(getMessageListAction);

    try {
      const context = yield call(getMessageList, action.data);

      yield put(messageListSuccess(context));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
}

function* watchReadMessage() {
  const readMessageAction = yield actionChannel(READ_MESSAGE);

  while (true) {
    const action = yield take(readMessageAction);

    try {
      const context = yield call(readMessage, action.data);

      yield put(messageRead(context));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
}

function* watchDeleteMessage() {
  const deleteMessageAction = yield actionChannel(DELETE_MESSAGE);

  while (true) {
    const action = yield take(deleteMessageAction);

    try {
      const context = yield call(deleteMessage, action.data);

      yield put(messageDeleted(context));
    } catch (e) {
      yield put(handleApiErrorAction(e));
    }
  }
}