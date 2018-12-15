import APIUtil from '../../utils/api-util';
import ApiFetch from '../../utils/api-fetch';

export function getCollectionList(options) {
  return ApiFetch.get(APIUtil.assemblePath(APIUtil.API_INFO.getCollectionList, {options}))
    .then(({context}) => context);
}