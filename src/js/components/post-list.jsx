import {Icon, List, Avatar} from 'antd';
import React, {Component} from 'react';

class PostList extends Component {
  componentWillMount() {}

  componentWillReceiveProps() {}

  render() {
    const data = [
      {
        title: 'Ant Design Title 1'
      },
      {
        title: 'Ant Design Title 2'
      },
      {
        title: 'Ant Design Title 3'
      },
      {
        title: 'Ant Design Title 4'
      }
    ];
    const {hasAvatar} = this.props;

    return (
      <List
        className={hasAvatar ? 'post__avatar-list' : ''}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item className="post__item">
            <div class="ant-list-item-meta post__item-meta">
              {
                hasAvatar ? (
                  <div class="ant-list-item-meta-avatar">
                    <Avatar size={52} icon="user" />
                  </div>
                ) : null
              }
              <div className="post__rate">
                <Icon type="caret-up" />
                <span className="post__rate-number">200</span>
                <Icon type="caret-down" />
              </div>
              <div class="ant-list-item-meta-content">
                <h4 class="ant-list-item-meta-title"><a class="post__item-title" href="">{item.title}</a></h4>
                <div class="ant-list-item-meta-description">
                  <div class="post__item-info">
                    <span class="text-middle">0 回复</span>
                    <i class="text-middle">•</i>
                    <span class="text-middle">4 小时前</span>
                    <span class="text-middle">来自 蓝鸭</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="ant-list-item-extra">
              <Icon type="star" theme="filled" />
            </div>
          </List.Item>
        )}
      />
    );
  }
}

PostList.PropTypes = {};

export default PostList;