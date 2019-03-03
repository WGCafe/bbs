import {combineReducers} from 'redux';
import Constants from '../../utils/constants';

const {
  MY_PROFILE_FETCHED
} = Constants.ACTIONS_NAME;

function myProfile(state = [], action) {
  switch (action.type) {
    case MY_PROFILE_FETCHED:
      return action.data;
    default:
      return state;
  }
}

const common = combineReducers({
  myProfile
});

export default function root(state, action) {
  return common(state, action);
}