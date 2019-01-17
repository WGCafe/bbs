import Constants from '../../utils/constants';

const {
  GET_ARTICLE_LIST,
  ARTICLE_LIST,
  CREATE_ARTICLE,
  GET_ARTICLE,
  ARTICLE
} = Constants.ACTIONS_NAME;

export function getArticleList(options) {
  return {
    type: GET_ARTICLE_LIST,
    options
  };
}

export function getArticleListSuccess(data) {
  return {
    type: ARTICLE_LIST,
    data
  };
}

export function createArticle(options) {
  return {
    type: CREATE_ARTICLE,
    options
  };
}

export function deleteArticle(options) {
  return {
    type: DELETE_ARTICLE,
    options
  };
}

export function deleteArticleSuccess(options) {
  return {
    type: DELETED_ARTICLE,
    options
  };
}

export function getArticle(options) {
  return {
    type: GET_ARTICLE,
    options
  };
}

export function getArticleSuccess(data) {
  return {
    type: ARTICLE,
    data
  };
}