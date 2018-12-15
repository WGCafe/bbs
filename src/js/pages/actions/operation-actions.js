import Constants from '../../utils/constants';

const {
  GET_COLLECTION_LIST,
  COLLECTION_LIST
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