import Constants from '../../utils/constants';

const {
  GET_MY_PROFILE,
  MY_PROFILE_FETCHED,
  GET_MY_POSTS,
  MY_POSTS_FETCHED,
  GET_MY_INFO,
  MY_INFO_FETCHED,
  GET_MY_COMMENTS,
  MY_COMMENTS_FETCHED
} = Constants.ACTIONS_NAME;

export function getMyProfile(data) {
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

export function getMyPosts(data) {
  return {
    type: GET_MY_POSTS,
    data
  };
}

export function getMyPostsSuccess(data) {
  return {
    type: MY_POSTS_FETCHED,
    data
  };
}

export function getMyComments(data) {
  return {
    type: GET_MY_COMMENTS,
    data
  };
}

export function getMyCommentsSuccess(data) {
  return {
    type: MY_COMMENTS_FETCHED,
    data
  };
}

export function getMyInfo(data) {
  return {
    type: GET_MY_INFO,
    data
  };
}

export function getMyInfoSuccess(data) {
  return {
    type: MY_INFO_FETCHED,
    data
  };
}
