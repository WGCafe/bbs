import Constants from '../../utils/constants';

const {
  GET_COLLECTION_LIST,
  COLLECTION_LIST,
  SUBMIT_COLLECTION,
  SUBMITED_COLLECTION
} = Constants.ACTIONS_NAME;

export function getCollectionList() {
  return {
    type: GET_COLLECTION_LIST
  };
}

export function getCollectionListSuccess(data) {
  return {
    type: COLLECTION_LIST,
    data
  };
}

export function submitCollection(data) {
  return {
    type: SUBMIT_COLLECTION,
    data
  };
}

export function submitedCollection(status) {
  return {
    type: SUBMITED_COLLECTION,
    status
  };
}