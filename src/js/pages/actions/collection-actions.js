import Constants from '../../utils/constants';

const {
  CREATE_COLLECTION,
  DELETE_COLLECTION,
  DELETED_COLLECTION,
  COLLECTION,
  GET_COLLECTION_LIST,
  COLLECTION_LIST,
  SUBMIT_COLLECTION,
  SUBMITED_COLLECTION
} = Constants.ACTIONS_NAME;

export function createCollection(options) {
  return {
    type: CREATE_COLLECTION,
    options
  };
}

export function createCollectionSuccess(data) {
  return {
    type: COLLECTION,
    data
  };
}

export function deleteCollection(options) {
  return {
    type: DELETE_COLLECTION,
    options
  };
}

export function deleteCollectionSuccess(options) {
  return {
    type: DELETED_COLLECTION,
    options
  };
}

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

export function submitCollection(options) {
  return {
    type: SUBMIT_COLLECTION,
    options
  };
}

export function submitedCollection(status) {
  return {
    type: SUBMITED_COLLECTION,
    status
  };
}