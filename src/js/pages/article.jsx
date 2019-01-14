import {connect} from 'react-redux';
import {getArticle} from './actions/article-actions';

import {List, Row, Col, Upload, Button, message, Icon, Input, Avatar, Menu, Dropdown} from 'antd';
import React, {Component} from 'react';
import LayoutContainer from '../layout/container.jsx';

const {TextArea} = Input;

class Article extends Component {
  componentWillMount() {
    const {match} = this.props;

    if (!match.params || !match.params.article_id) {
      return;
    }

    const {article_id = ''} = match.params;

    this.props.getArticle({article_id});
  }

  componentWillReceiveProps() { }

  renderTopic() {
    const {article} = this.props;
    const menu = (
      <Menu>
        <Menu.Item>
          <Icon type="edit" theme="filled" />
          <a rel="noopener noreferrer" href="http://www.taobao.com/">删除</a>
        </Menu.Item>
        <Menu.Item>
          <Icon type="exclamation-circle" theme="filled" />
          <a rel="noopener noreferrer" href="http://www.tmall.com/">举报这个主题 </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <div className="ant-list-item post__item post__avatar-list">
          <div className="ant-list-item-content ant-list-item-content-single">
            <div className="ant-list-item-meta post__item-meta">
              <div className="ant-list-item-meta-avatar">
                <Avatar size={52} src="" />
              </div>
              <div className="ant-list-item-meta-content">
                <h4 className="ant-list-item-meta-title"><a className="post__item-title" href="">{article.title || ''}</a></h4>
                <div className="ant-list-item-meta-description">
                  <div className="post__item-info">
                    <span className="text-middle">{article.comment_num} 回复</span>
                    <i className="text-middle">•</i>
                    <span className="text-middle">{article.create_time} 小时前</span>
                    <span className="text-middle">来自 {article.author_name}</span>
                  </div>
                </div>
              </div>
            </div>
            <Dropdown overlay={menu}  placement="bottomRight" className="ant-list-item-extra">
              <div className="ant-dropdown-link">
                <Icon type="ellipsis" />
              </div>
            </Dropdown>
          </div>
        </div>
        <div className="article__contnet">
          <p className="article__contnet-text">{article.content}</p>
          <div className="article__operation-info">
            <ul className="article__info">
              <li className="article__info-item">感谢 {article.thanks_num}</li>
              <li className="article__info-item">收藏 {article.collection_num}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  renderComments() {
    const {commentList = []} = this.props;

    return (
      <List
        className="article__list"
        itemLayout="horizontal"
        dataSource={commentList}
        renderItem={item => {

          return (
            <List.Item className="post__item">
              <div className="ant-list-item-meta post__item-meta">
                <div className="ant-list-item-meta-avatar">
                  <Avatar size={30} src="" />
                </div>
                <div className="ant-list-item-meta-content">
                  <div className="ant-list-item-meta-description">
                    <div className="article__comment post__item-info">
                      <h4 className="article__comment-title text-middle">{item.author_name}</h4>
                      <span className="article__comment-time text-middle">{item.create_time} 小时前</span>
                      <div className="article__comment-like">
                        <Icon type="heart" theme="filled" />
                        <span className="text-middle">{item.thanks_num}</span>
                      </div>
                    </div>

                    <div className="article__comment-text">
                      {
                        item.source_comment
                          ? <p className="article__source-comment">{item.source_comment}</p>
                          : null
                      }
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </List.Item>
          );
        }}/>
    );
  }

  renderUpload() {
    const props = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text'
      },
      onChange(info) {
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };

    return (
      <div className="article__upload">
        <div className="article__upload-textarea">
          <img className="article-topic__img"/>
          <TextArea rows={4}  placeholder="输入状态" />
          <Upload className="article__upload-image" {...props}>
            <Icon type="picture" theme="filled" />
            <span className="text-middle">添加图片</span>
          </Upload>
        </div>
        <Button className="article__upload-button">回复</Button>
      </div>
    );
  }

  render() {
    return (
      <LayoutContainer>
        <div className="article__container container">
          <Row type="flex" justify="space-between" align="top" gutter={24}>
            <Col span={17}>
              {this.renderTopic()}
              {this.renderComments()}
              {this.renderUpload()}
            </Col>
            <Col span={7}>
              {/* <SideList/> */}
            </Col>
          </Row>
        </div>
      </LayoutContainer>
    );
  }
}

Article.propTypes = {};

export default connect(({
  articles,
  comments
}) => {
  return {
    article: articles.article,
    commentList: comments.commentList
  };
}, {
  getArticle
})(Article);