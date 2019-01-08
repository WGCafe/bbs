import Constants from '../../utils/constants';

const {
  COMMENT_LIST
} = Constants.ACTIONS_NAME;

export function getCommentListSuccess(data) {
  return {
    type: COMMENT_LIST,
    data
  };
}