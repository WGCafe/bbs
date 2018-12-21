import Constants from '../../utils/constants';

const {
  CHEKC_USER_AUTHENTICATION,
  IS_USER_AUTHENTICED,
  GET_USER_SIGN_UP,
  USER_SIGN_UP
} = Constants.ACTIONS_NAME;

export function checkUserAuthentication(data) {
  return {
    type: CHEKC_USER_AUTHENTICATION,
    data
  };
}

export function isUserAuthenticated(data) {
  return {
    type: IS_USER_AUTHENTICED,
    data
  };
}

export function getUserSignUp(data) {
  return {
    type: GET_USER_SIGN_UP,
    data
  };
}

export function userSignUpSuccess(data) {
  return {
    type: USER_SIGN_UP,
    data
  };
}