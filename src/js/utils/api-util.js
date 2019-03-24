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
        path: 'users/'
      },
      userLogIn: {
        path: 'login/'
      },

      /* User profile */
      getMyProfile: {
        path: 'myprofile/'
      },
      getMyPosts: {
        path: 'mypost/'
      },
      getMyComments: {
        path: 'mycomments/'
      },
      getMyInfo: {
        path: 'myInfo/'
      },

      /* ArticleType */
      getArticleTypeList: {
        path: 'articletype/'
      },

      /* Article */
      getArticleList: {
        path: 'articles/'
      },
      createArticle: {
        path: 'article/'
      },
      deleteArticle: {
        path: 'article/:article_id'
      },
      getArticle: {
        path: 'article/:article_id'
      },

      /* Comment */
      getCommentList: {
        path: 'comments/'
      },

      /* Collection */
      createCollection: {
        path: '/userfav/:article_id'
      },
      deleteCollection: {
        path: '/userfav/:article_id'
      },
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
        path: 'usermessage/:message_id'
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