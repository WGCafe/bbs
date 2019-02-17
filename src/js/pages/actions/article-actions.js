import Constants from '../../utils/constants';

const {
  GET_ARTICLE_LIST,
  ARTICLE_LIST,
  CREATE_ARTICLE,
  DELETE_ARTICLE,
  DELETED_ARTICLE,
  GET_ARTICLE,
  ARTICLE,
  REPORT_ARTICLE,
  REPORTED_ARTICLE
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

export function deleteArticleSuccess(data) {
  return {
    type: DELETED_ARTICLE,
    data
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

export function reportArticle(options) {
  return {
    type: REPORT_ARTICLE,
    options
  };
}

export function reportArticleSuccess(data) {
  return {
    type: REPORTED_ARTICLE,
    data
  };
}