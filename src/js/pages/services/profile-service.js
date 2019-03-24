import APIUtil from '../../utils/api-util';
import ApiFetch from '../../utils/api-fetch';

export function getMyProfile(data) {
  // return ApiFetch.delete(APIUtil.assemblePath(APIUtil.API_INFO.getMyProfile, data))
  return ApiFetch.get(APIUtil.API_INFO.getMyProfile, data)
    .then(({context}) => context);
}

export function getMyPosts(data) {
  return ApiFetch.get(APIUtil.API_INFO.getMyPosts, data)
    .then(({context}) => context);
}

export function getMyComments(data) {
  return ApiFetch.get(APIUtil.API_INFO.getMyComments, data)
    .then(({context}) => context);
}

export function getMyInfo(data) {
  return ApiFetch.get(APIUtil.API_INFO.getMyInfo, data)
    .then(({context}) => context);
}