import APIUtil from '../../utils/api-util';
import ApiFetch from '../../utils/api-fetch';

export function getCommentList(options) {
  return ApiFetch.get(APIUtil.assemblePath(APIUtil.API_INFO.getCommentList, {}, options))
    .then(({context}) => context);
}