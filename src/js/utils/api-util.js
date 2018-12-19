import pathToRegexp from 'path-to-regexp';
import _ from 'underscore';

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
      /* User Sign Up */
      userSignUp: {
        path: 'user/'
      },

      /* User Log In */
      userLogIn: {
        path: 'login/'
      },

      /* ArticleType */
      getArticleTypeList: {
        path: 'articletype/'
      },

      /* Article */
      getArticleList: {
        path: 'articles/'
      },

      /* Collection */
      getCollectionList: {
        path: 'userfav/'
      },
      submitCollection: {
        path: 'operation/'
      },

      /* Message */
      getMessageList: {
        path: 'usermessage/'
      },
      messageOpt: {
        path: 'usermessage/:id'
      }
    };
  }

  static isHttpSuccess(status) {
    if (status && status === 200) {
      return true;
    }

    return false;
  }

  /**
   * example
   * pathInfo: {path: '/user/:id', moduleType: 'xx'}
   * keys: {id: '122'}
   * queryParams: {key: value}
   *
   * return {path: '/user/122?key=value', moduleType}
   *
   * @param {*} path
   * @param {*} keys
   * @param {*} queryParams
   */
  static assemblePath(pathInfo, keys, queryParams) {
    const {path, ...others} = pathInfo;

    let result = path;

    try {
      const toPath = pathToRegexp.compile(path);

      result = toPath(keys);

      if (queryParams && _.isObject(queryParams)) {
        let query = Object.keys(queryParams)
          .filter(key => queryParams[key])
          .map(key => `${key}=${queryParams[key]}`)
          .join('&');

        result = `${result}?${query}`;
      }
    } catch (error) {
      if (__DEV__) {
        /* eslint-disable */
        console.error(`path: '${path}'`, error);
        /* eslint-enable */
      }
    }

    return {
      path: result,
      ...others
    };
  }
}

export default ApiUtil;