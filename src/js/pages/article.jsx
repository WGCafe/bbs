import {Layout, List, Row, Col, Upload, Button, message, Icon, Input} from 'antd';
import React, {Component} from 'react';

import Header from '../layout/header.jsx';
import Content from '../layout/content.jsx';

class Article extends Component {
  componentWillMount() { }

  componentWillReceiveProps() { }

  renderTopic() {
    return (
      <div className="article-topic__wrapper">
        <div className="article-topic">
          <img className="article-topic__img"/>
          <span className="article-topic__readed">123</span>
          <div className="article-topic__title">
            <p>上海哪家医院好</p>
            <span>3回复|4小时前 来自 xx</span>
            <i className="dot-icon">
              <span></span>
            </i>
          </div>
        </div>
        <div className="article-topic__comment">
          <p className="article-topic__comment-p">hahahahaha</p>
          <span className="article-topic__comment-tip">感谢123 收藏123 转发123</span>
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
        renderItem={item => (
          <List.Item className="article-comment__item">
            <img className="article-comment__img"/>
            <ul className="article-comment__ul">
              <li>{item.name}</li>
              <li>{item.time}</li>
              <li>{item.like}</li>
            </ul>
            <p className="article-comment__p">{item.comment}</p>
          </List.Item>
        )}
      />
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
        <Button className="article-upload__button">回復</Button>
      </div>
    );
  }

  render() {
    const data2 = [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.'
    ];

    return (
      <Layout className="layout">
        <Header className="header">
        </Header>
        <Content>
          <div className="article__container container">
            <Row type="flex" justify="space-between" align="top" gutter={24}>
              <Col span={17}>
                {this.renderTopic()}
                {this.renderComment()}
                {this.renderUpload()}
              </Col>
              <Col span={7}>
                <List
                  className="side-list"
                  split={false}
                  header={<div><h2 className="side-list__title">Community Guidelines</h2></div>}
                  dataSource={data2}
                  renderItem={item => (
                    <List.Item>
                      <h4 className="side-list__item-title">Aenean euismod</h4>
                      <p className="side-list__item-detail">{item}</p>
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    );
  }
}

Article.propTypes = {};

export default Article;