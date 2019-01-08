import {combineReducers} from 'redux';
import Constants from '../../utils/constants';

const {
  COMMENT_LIST
} = Constants.ACTIONS_NAME;

function commentList(state = {}, action) {
  switch (action.type) {
    case COMMENT_LIST:
      return action.data;
    default:
      return state;
  }
}

const common = combineReducers({
  commentList
});

export default function root(state, action) {
  return common(state, action);
}