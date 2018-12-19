import APIUtil from '../../utils/api-util';
import ApiFetch from '../../utils/api-fetch';

export function getMessageList(data) {
  return ApiFetch.get(APIUtil.assemblePath(APIUtil.API_INFO.getMessageList, {data}))
    .then(({context}) => context);
}

export function readMessage(data) {
  return ApiFetch.get(APIUtil.assemblePath(APIUtil.API_INFO.messageOpt, {data}))
    .then(({context}) => context);
}

export function deleteMessage(data) {
  return ApiFetch.delete(APIUtil.assemblePath(APIUtil.API_INFO.messageOpt, {data}))
    .then(({context}) => context);
}