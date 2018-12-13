import APIUtil from '../../utils/api-util';
import ApiFetch from '../../utils/api-fetch';

export function getArticleList(payload) {
  return ApiFetch.get(APIUtil.API_INFO.getArticleList, {payload})
    .then(({context}) => context);
}