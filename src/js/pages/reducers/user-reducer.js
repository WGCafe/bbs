import {combineReducers} from 'redux';
import Constants from '../../utils/constants';

const {
  IS_USER_AUTHENTICED,
  USER_SIGN_UP,
  USER_SIGN_IN
} = Constants.ACTIONS_NAME;

function isUserAuthenticated(state = [], action) {
  switch (action.type) {
    case IS_USER_AUTHENTICED:
      return action.data;
    default:
      return state;
  }
}

function userSignUp(state = [], action) {
  switch (action.type) {
    case USER_SIGN_UP:
      return action.data;
    default:
      return state;
  }
}

function userSignIn(state = [], action) {
  switch (action.type) {
    case USER_SIGN_IN:
      return action.data;
    default:
      return state;
  }
}

const common = combineReducers({
  isUserAuthenticated,
  userSignUp,
  userSignIn
});

export default function root(state, action) {
  return common(state, action);
}