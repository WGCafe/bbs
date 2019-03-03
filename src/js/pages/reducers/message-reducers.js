import {combineReducers} from 'redux';
import Constants from '../../utils/constants';

const {
  MESSAGE_LIST
} = Constants.ACTIONS_NAME;

function messageList(state = [], action) {
  switch (action.type) {
    case MESSAGE_LIST:
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