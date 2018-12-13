import APIUtil from '../../utils/api-util';
import ApiFetch from '../../utils/api-fetch';

export function getArticleList(options) {
  return ApiFetch.get(APIUtil.assemblePath(APIUtil.API_INFO.getArticleList, {options}))
    .then(({context}) => context);
}