import Constants from '../../utils/constants';

const {
  GET_ARTICLE_TYPE_LIST,
  ARTICLE_TYPE_LIST
} = Constants.ACTIONS_NAME;

export function getArticleTypeList() {
  return {
    type: GET_ARTICLE_TYPE_LIST
  };
}

export function getArticleTypeListSuccess(data) {
  return {
    type: ARTICLE_TYPE_LIST,
    data
  };
}