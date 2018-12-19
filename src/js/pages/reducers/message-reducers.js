import {combineReducers} from 'redux';
import Constants from '../../utils/constants';

const {
  MESSAGE_LIST_GOT,
  MESSAGE_READ,
  MESSAGE_DELETED
} = Constants.ACTIONS_NAME;

function messageList(state = [], action) {
  switch (action.type) {
    case MESSAGE_LIST_GOT:
    case MESSAGE_READ:
    case MESSAGE_DELETED:
      return action.data;
    default:
      return state;
  }
}

const common = combineReducers({
  messageList
});

export default function root(state, action) {
  return common(state, action);
}