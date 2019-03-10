import {combineReducers} from 'redux';
import Constants from '../../utils/constants';

const {
  MY_PROFILE_FETCHED,
  MY_POST_FETCHED,
  USER_INFO_FETCHED
} = Constants.ACTIONS_NAME;

function myProfile(state = {}, action) {
  switch (action.type) {
    case MY_PROFILE_FETCHED:
      return {myPost: action.data};
    default:
      return state;
  }
}

function myPost(state = [], action) {
  switch (action.type) {
    case MY_POST_FETCHED:
      return {myProfile: action.data};
    default:
      return state;
  }
}

function userInfo(state = {}, action) {
  switch(action.type) {
    case USER_INFO_FETCHED:
      return action.data;
    default:
      return state;
  }
}

const common = combineReducers({
  myProfile,
  myPost,
  userInfo
});

export default function root(state, action) {
  return common(state, action);
}