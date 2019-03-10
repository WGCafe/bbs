import APIUtil from '../../utils/api-util';
import ApiFetch from '../../utils/api-fetch';

export function getMyProfile(data) {
  // return ApiFetch.delete(APIUtil.assemblePath(APIUtil.API_INFO.getMyProfile, data))
  return ApiFetch.get(APIUtil.API_INFO.getMyProfile, data)
    .then(({context}) => context);
}

export function getMyPost(data) {
  return ApiFetch.get(APIUtil.API_INFO.getMyPost, data)
    .then(({context}) => context);
}