import {combineReducers} from 'redux';
import Constants from '../../utils/constants';

const {
  ARTICLE_LIST
} = Constants.ACTIONS_NAME;

function articleList(state = [], action) {
  switch (action.type) {
    case ARTICLE_LIST:
      return action.data;
    default:
      return state;
  }
}

const common = combineReducers({
  articleList
});

export default function root(state, action) {
  return common(state, action);
}