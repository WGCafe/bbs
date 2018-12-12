import Constants from '../../utils/constants';

const {
  GET_ARTICLES_TYPE_LIST,
  ARTICLES_TYPE_LIST
} = Constants.ACTIONS_NAME;

export function getArticleTypeList() {
  return {
    type: GET_ARTICLES_TYPE_LIST
  };
}

export function getArticleTypeListSuccess(data) {
  return {
    type: ARTICLES_TYPE_LIST,
    data
  };
}