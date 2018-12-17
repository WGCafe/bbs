import APIUtil from '../../utils/api-util';
import ApiFetch from '../../utils/api-fetch';

export function userSignUp() {
  return ApiFetch.post(APIUtil.API_INFO.userSignUp)
    .then(({context}) => context);
}