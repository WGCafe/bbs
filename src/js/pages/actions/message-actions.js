import Constants from '../../utils/constants';

const {
  GET_MESSAGE_LIST,
  MESSAGE_LIST,
  READ_MESSAGE,
  MESSAGE_READ,
  DELETE_MESSAGE,
  MESSAGE_DELETED
} = Constants.ACTIONS_NAME;

export function getMessageList(data) {
  return {
    type: GET_MESSAGE_LIST,
    data
  };
}

export function messageListSuccess(data) {
  return {
    type: MESSAGE_LIST,
    data
  };
}

export function readMessage(data) {
  return {
    type: READ_MESSAGE,
    data
  };
}

export function messageRead(data) {
  return {
    type: MESSAGE_READ,
    data
  };
}

export function deleteMessage(data) {
  return {
    type: DELETE_MESSAGE,
    data
  };
}

export function messageDeleted(data) {
  return {
    type: MESSAGE_DELETED,
    data
  };
}