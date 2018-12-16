import {combineReducers} from 'redux';
import Constants from '../../utils/constants';

const {
  USER_SIGN_UP
} = Constants.ACTIONS_NAME;

function userSignUp(state = [], action) {
  switch (action.type) {
    case USER_SIGN_UP:
      return action.data;
    default:
      return state;
  }
}

const common = combineReducers({
  userSignUp
});

export default function root(state, action) {
  return common(state, action);
}