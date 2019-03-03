import Constants from '../../utils/constants';

const {
  GET_MY_PROFILE,
  MY_PROFILE_FETCHED
} = Constants.ACTIONS_NAME;

export function getUserProfile(data) {
  return {
    type: GET_MY_PROFILE,
    data
  };
}

export function getMyProfileSuccess(data) {
  return {
    type: MY_PROFILE_FETCHED,
    data
  };
}
