import APIUtil from '../../utils/api-util';
import ApiFetch from '../../utils/api-fetch';

export function getArticleList(options) {
  return ApiFetch.get(APIUtil.assemblePath(APIUtil.API_INFO.getArticleList, {}, options))
    .then(({context}) => context);
}

export function createArticle(options) {
  return ApiFetch.post(APIUtil.API_INFO.createArticle, options)
    .then(({context}) => context);
}

export function deleteArticle(options) {
  return ApiFetch.delete(APIUtil.API_INFO.deleteArticle, options)
    .then(({context}) => context);
}

export function getArticle(options) {
  return ApiFetch.get(APIUtil.assemblePath(APIUtil.API_INFO.getArticle, options))
    .then(({context}) => context);
}