import Constants from '../../utils/constants';

const {
  GET_USER_SIGN_UP,
  USER_SIGN_UP
} = Constants.ACTIONS_NAME;

export function getUserSignUp() {
  return {
    type: GET_USER_SIGN_UP
  };
}

export function userSignUpSuccess(data) {
  return {
    type: USER_SIGN_UP,
    data
  };
}