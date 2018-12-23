import {List, Row, Col, Upload, Button, message, Icon, Input, Avatar} from 'antd';
import React, {Component} from 'react';
import LayoutContainer from '../layout/container.jsx';

const {TextArea} = Input;

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
        <div className="article__contnet">
          <p className="article__contnet-text">要做根管治疗，还有一颗门牙要修复 求大家推荐靠谱的医院</p>
          <div className="article__operation-info">
            <ul className="article__info">
              <li className="article__info-item">感谢 123</li>
              <li className="article__info-item">收藏 97</li>
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
        className="article__list"
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
                    <div className="article__comment post__item-info">
                      <h4 className="article__comment-title text-middle">{item.name}</h4>
                      <span className="article__comment-time text-middle">4 小时前</span>
                      <div className="article__comment-like">
                        <Icon type="heart" theme="filled" />
                        <span className="text-middle">3</span>
                      </div>
                    </div>

                    <div className="article__comment-text">
                      <p>静安牙防所</p>
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