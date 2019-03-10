import Constants from '../../utils/constants';

const {
  GET_MY_PROFILE,
  MY_PROFILE_FETCHED,
  GET_MY_POST,
  MY_POST_FETCHED,
  GET_USER_INFO,
  USER_INFO_FETCHED,
  GET_USER_COMMENTS,
  USER_COMMENTS_FETCHED
} = Constants.ACTIONS_NAME;

export function getMYProfile(data) {
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

export function getMyPost(data) {
  return {
    type: GET_MY_POST,
    data
  };
}

export function getMyPostSuccess(data) {
  return {
    type: MY_POST_FETCHED,
    data
  };
}

export function getUserInfo(data) {
  return {
    type: GET_USER_INFO,
    data
  };
}

export function getUserInfoSuccess(data) {
  return {
    type: USER_INFO_FETCHED,
    data
  };
}

export function getUserComments(data) {
  return {
    type: GET_USER_COMMENTS,
    data
  };
}

export function getUserCommentsSuccess(data) {
  return {
    type: USER_COMMENTS_FETCHED,
    data
  };
}
