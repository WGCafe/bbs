class Constants {
  static get ACTIONS_NAME() {
    return {
      /* User Sign Up */
      GET_USER_SIGN_UP: 'GET_USER_SIGN_UP',
      USER_SIGN_UP: 'USER_SIGN_UP',

      /* User Sign In */
      GET_USER_SIGN_IN: 'GET_USER_SIGN_IN',
      USER_SIGN_IN: 'USER_SIGN_IN',

      /* Article Type */
      GET_ARTICLE_TYPE_LIST: 'GET_ARTICLE_TYPE_LIST',
      ARTICLE_TYPE_LIST: 'ARTICLE_TYPE_LIST',

      /* Article */
      GET_ARTICLE_LIST: 'GET_ARTICLE_LIST',
      ARTICLE_LIST: 'ARTICLE_LIST',

      /* COLLECTION */
      GET_COLLECTION_LIST: 'GET_COLLECTION_LIST',
      COLLECTION_LIST: 'COLLECTION_LIST',
      SUBMIT_COLLECTION: 'SUBMIT_COLLECTION',
      SUBMITED_COLLECTION: 'SUBMITED_COLLECTION',

      /* Message */
      GET_MESSAGE_LIST: 'GET_MESSAGE_LIST',
      MESSAGE_LIST_GOT: 'MESSAGE_LIST_GOT',
      READ_MESSAGE: 'READ_MESSAGE',
      MESSAGE_READ: 'MESSAGE_READ',
      DELETE_MESSAGE: 'DELETE_MESSAGE',
      MESSAGE_DELETED: 'MESSAGE_DELETED'
    };
  }

  static get OPERATION_TYPES() {
    return [
      '转发',
      '收藏',
      '感谢',
      '评论',
      '回复',
      '举报'
    ];
  }
}

export default Constants;