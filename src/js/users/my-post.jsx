// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import React, {Component} from 'react';

class MyComment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {myComment} = this.props;

    return (
      <div className="ant-list-item-meta-content">
        <h4 className="ant-list-item-meta-title">
          <Link className="post__item-title"
            to={`/article-detail/${myComment.id}`}
          >
            {myComment.title}
          </Link>
        </h4>
        <div className="ant-list-item-meta-description">
          <div className="post__item-info">
            <span className="text-middle">{myComment.vote_up} 赞</span>
            <i className="text-middle">•</i>
            <span className="text-middle">{myComment.comment_num} 评论</span>
            <i className="text-middle">•</i>
            <span className="text-middle">来自 {myComment.createdTime} 前</span>
          </div>
        </div>
      </div>
    );
  }
}

MyComment.propTypes = {
};

export default MyComment;
