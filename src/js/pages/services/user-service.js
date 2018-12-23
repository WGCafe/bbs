import APIUtil from '../../utils/api-util';
import ApiFetch from '../../utils/api-fetch';

export function userSignUp(data) {
  return ApiFetch.post(APIUtil.API_INFO.userSignUp, data)
    .then(({context}) => context);
}