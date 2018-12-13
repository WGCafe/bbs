import {combineReducers} from 'redux';
import Constants from '../../utils/constants';

const {
  ARTICLE_TYPE_LIST
} = Constants.ACTIONS_NAME;

function articleTypeList(state = [], action) {
  switch (action.type) {
    case ARTICLE_TYPE_LIST:
      return action.data;
    default:
      return state;
  }
}

const common = combineReducers({
  articleTypeList
});

export default function root(state, action) {
  return common(state, action);
}