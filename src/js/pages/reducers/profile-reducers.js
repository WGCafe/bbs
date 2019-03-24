import {combineReducers} from 'redux';
import Constants from '../../utils/constants';

const {
  MY_PROFILE_FETCHED,
  MY_POSTS_FETCHED,
  MY_INFO_FETCHED,
  MY_COMMENTS_FETCHED
} = Constants.ACTIONS_NAME;

function myProfile(state = {}, action) {
  switch (action.type) {
    case MY_PROFILE_FETCHED:
      return {myProfile: action.data};
    default:
      return state;
  }
}

function myPosts(state = [], action) {
  switch (action.type) {
    case MY_POSTS_FETCHED:
      return {myPosts: action.data};
    default:
      return state;
  }
}

function myInfo(state = {}, action) {
  switch(action.type) {
    case MY_INFO_FETCHED:
      return action.data;
    default:
      return state;
  }
}

function myComments(state = [], action) {
  switch (action.type) {
    case MY_COMMENTS_FETCHED:
      return {myComments: action.data};
    default:
      return state;
  }
}

const common = combineReducers({
  myProfile,
  myPosts,
  myInfo,
  myComments
});

export default function root(state, action) {
  return common(state, action);
}