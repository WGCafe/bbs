import PropTypes from 'prop-types';

import {Icon, List, Avatar} from 'antd';
import React, {Component} from 'react';

/*<div className="post__rate">
  <Icon type="caret-up" />
  <span className="post__rate-number">200</span>
  <Icon type="caret-down" />
</div>*/

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isAll,
      postList
    } = this.props;

    return (
      <List
        className={isAll ? 'post__avatar-list' : ''}
        itemLayout="horizontal"
        dataSource={postList}
        renderItem={item => {
          const {author} = item;

          return (
            <List.Item className="post__item">
              <div className="ant-list-item-meta post__item-meta">
                {
                  isAll ? (
                    <div className="ant-list-item-meta-avatar">
                      <Avatar size={52} src={author.face_image} />
                    </div>
                  ) : null
                }
                <div className="ant-list-item-meta-content">
                  <h4 className="ant-list-item-meta-title"><a className="post__item-title" href="">{item.title}</a></h4>
                  <div className="ant-list-item-meta-description">
                    <div className="post__item-info">
                      <span className="text-middle">{item.comments_num} 回复</span>
                      <i className="text-middle">•</i>
                      <span className="text-middle">{item.update_time} 小时前</span>
                      <span className="text-middle">来自 {author.nick_name}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ant-list-item-extra">
                <Icon type="star" theme="filled" />
              </div>
            </List.Item>
          );
        }}/>
    );
  }
}

PostList.propTypes = {
  isAll: PropTypes.bool,
  postList: PropTypes.arrayOf(PropTypes.object)
};

export default PostList;