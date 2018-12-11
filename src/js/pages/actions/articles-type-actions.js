import Constants from '../../utils/constants';

const {
  GET_ARTICLES_TYPE_LIST,
  ARTICLES_TYPE_LIST
} = Constants.ACTIONS_NAME;

export function getArticleTypeList(data) {
  return {
    type: GET_ARTICLES_TYPE_LIST,
    data
  };
}

export function getArticleTypeListSuccess(data) {
  return {
    type: ARTICLES_TYPE_LIST,
    data
  };
}