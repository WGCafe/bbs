import {combineReducers} from 'redux';
import Constants from '../../utils/constants';

const {
  COLLECTION,
  DELETED_COLLECTION,
  COLLECTION_LIST,
  SUBMITED_COLLECTION
} = Constants.ACTIONS_NAME;

function collection(state = null, action) {
  switch (action.type) {
    case COLLECTION:
      return action.data;
    default:
      return state;
  }
}

function deletedCollection(state = null, action) {
  switch (action.type) {
    case DELETED_COLLECTION:
      return action.data;
    default:
      return state;
  }
}

function collectionList(state = [], action) {
  switch (action.type) {
    case COLLECTION_LIST:
      return action.data;
    default:
      return state;
  }
}

function collectionStatus(state = [], action) {
  switch (action.type) {
    case SUBMITED_COLLECTION:
      return action.data;
    default:
      return state;
  }
}

const common = combineReducers({
  collection,
  deletedCollection,
  collectionList,
  collectionStatus
});

export default function root(state, action) {
  return common(state, action);
}