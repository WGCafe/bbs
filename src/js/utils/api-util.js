import FeedbackUtil from '../utils/feedback-util';
import {handleApiError} from '../common/actions/feedback-actions';


export function handleApiErrorAction(error) {
  const {status} = error;

  if (!status) {
    if (__DEV__) {
      /* eslint-disable */
      console.error(error);
      /* eslint-enable */
    }

    return handleApiError();
  }
  let data = {};

  switch (status) {
    default:
      data = {
        status,
        fbType: FeedbackUtil.FB_TYPE.MESSAGE,
        fbStatus: FeedbackUtil.FB_STATUS.ERROR
      };
      break;
  }

  return handleApiError(data);
}

class ApiUtil {
  static get API_INFO() {
    return {
      /* Subscribe */
      getArticleTypeList: {
        path: '/api/articletype/'
      }
    };
  }

  static isHttpSuccess(status) {
    if (status && status === 200) {
      return true;
    }

    return false;
  }
}

export default ApiUtil;