import Constants from '../../utils/constants';

const {
  GET_ARTICLE_LIST,
  ARTICLE_LIST
} = Constants.ACTIONS_NAME;

export function getArticleList(payload) {
  return {
    type: GET_ARTICLE_LIST,
    payload
  };
}

export function getArticleListSuccess(data) {
  return {
    type: ARTICLE_LIST,
    data
  };
}