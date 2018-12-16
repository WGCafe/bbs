class Constants {
  static get ACTIONS_NAME() {
    return {
      /* Article Type */
      GET_ARTICLE_TYPE_LIST: 'GET_ARTICLE_TYPE_LIST',
      ARTICLE_TYPE_LIST: 'ARTICLE_TYPE_LIST',

      /* Article */
      GET_ARTICLE_LIST: 'GET_ARTICLE_LIST',
      ARTICLE_LIST: 'ARTICLE_LIST',

      /* COLLECTION */
      GET_COLLECTION_LIST: 'GET_COLLECTION_LIST',
      COLLECTION_LIST: 'COLLECTION_LIST'
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