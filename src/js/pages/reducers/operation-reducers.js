import {combineReducers} from 'redux';
import Constants from '../../utils/constants';

const {
  COLLECTION_LIST
} = Constants.ACTIONS_NAME;

function collectionList(state = [], action) {
  switch (action.type) {
    case COLLECTION_LIST:
      return action.data;
    default:
      return state;
  }
}

const common = combineReducers({
  collectionList
});

export default function root(state, action) {
  return common(state, action);
}