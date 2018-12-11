import APIUtil from '../../utils/api-util';
import ApiFetch from '../../utils/api-fetch';

export function getArticleTypeList() {
  return ApiFetch.get(APIUtil.API_INFO.getArticleTypeList)
    .then(({context}) => context);
}