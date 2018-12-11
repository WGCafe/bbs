import FeedbackUtil from '../../utils/feedback-util';

export const ADD_MESSAGE = 'ADD_MESSAGE';

export const HANDLE_API_ERROR = 'HANDLE_API_ERROR';

export function handleApiError(data) {
  return {
    type: HANDLE_API_ERROR,
    data
  };
}

export function showSuccessMsg(data) {
  return showMessage({
    ...data,
    fbStatus: FeedbackUtil.FB_STATUS.SUCCESS
  });
}

export function showMessage(data) {
  return {
    type: ADD_MESSAGE,
    data
  };
}