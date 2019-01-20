import {combineReducers} from 'redux';
import Constants from '../../utils/constants';

const {
  ARTICLE_LIST,
  DELETED_ARTICLE,
  ARTICLE
} = Constants.ACTIONS_NAME;

function articleList(state = {}, action) {
  switch (action.type) {
    case ARTICLE_LIST:
      return action.data;
    default:
      return state;
  }
}

function article(state = {}, action) {
  switch (action.type) {
    case ARTICLE:
      return action.data;
    default:
      return state;
  }
}

function deletedArticle(state = null, action) {
  switch (action.type) {
    case DELETED_ARTICLE:
      return action.data;
    default:
      return state;
  }
}

const common = combineReducers({
  articleList,
  article,
  deletedArticle
});

export default function root(state, action) {
  return common(state, action);
}