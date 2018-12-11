class ApiUtil {
  static get API_INFO() {
    return {
      /* Subscribe */
      getgetArticleTypeList: {
        path: 'articletype/'
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