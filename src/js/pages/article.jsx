import {List, Row, Col, Upload, Button, message, Icon, Input, Avatar} from 'antd';
import React, {Component} from 'react';
import LayoutContainer from '../layout/container.jsx';

class Article extends Component {
  componentWillMount() { }

  componentWillReceiveProps() { }

  renderTopic() {
    return (
      <div>
        <div className="ant-list-item post__item post__avatar-list">
          <div className="ant-list-item-content ant-list-item-content-single">
            <div className="ant-list-item-meta post__item-meta">
              <div className="ant-list-item-meta-avatar">
                <Avatar size={52} src="" />
              </div>
              <div className="ant-list-item-meta-content">
                <h4 className="ant-list-item-meta-title"><a className="post__item-title" href="">test</a></h4>
                <div className="ant-list-item-meta-description">
                  <div className="post__item-info">
                    <span className="text-middle">3 回复</span>
                    <i className="text-middle">•</i>
                    <span className="text-middle">4 小时前</span>
                    <span className="text-middle">来自 testman</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ant-list-item-extra">
              <Icon type="ellipsis" />
            </div>
          </div>
        </div>
        <div>
          <p>内容</p>
          <div>
            <ul>
              <li>感谢 123</li>
              <li>收藏 97</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  renderComment() {
    const data = [
      {
        name: 'haha',
        time: 123123123,
        like: 3,
        comment: 'hahahahahaha'
      },
      {
        name: 'haha',
        time: 123123123,
        like: 3,
        comment: 'hahahahahaha'
      }
    ];

    return (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => {

          return (
            <List.Item className="post__item">
              <div className="ant-list-item-meta post__item-meta">
                <div className="ant-list-item-meta-avatar">
                  <Avatar size={30} src="" />
                </div>
                <div className="ant-list-item-meta-content">
                  <div className="ant-list-item-meta-description">
                    <div className="post__item-info">
                      <h5 className="text-middle">{item.name}</h5>
                      <span className="text-middle">4 小时前</span>
                      <div>
                        <span className="text-middle">3</span>
                      </div>
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
      <div className="article-upload">
        <div className="article-upload__textarea">
          <Input className="article-upload__input" />
          <Upload {...props}>
            <Icon type="upload" />
            添加圖片
          </Upload>
        </div>
        <Button className="article-upload__button"></Button>
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
              {this.renderComment()}
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

export default Article;