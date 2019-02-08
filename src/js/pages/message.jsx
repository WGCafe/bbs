import {Layout, List, Row, Col} from 'antd';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../layout/header.jsx';
import Content from '../layout/content.jsx';
import CommonUtils from '../utils/common-util';

class Message extends Component {
  componentWillMount() {}

  componentWillReceiveProps() {}

  componentDidMount() {
    const {isLogin} = this.props;

    CommonUtils.turnToSignIn(isLogin);
  }

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
          <div className="message__container container">
            <Row type="flex" justify="space-between" align="top" gutter={24}>
              <Col span={17}>
                <div className="message__header">
                  <h3 className="message__title">消息</h3>
                </div>
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item className="message__item active">
                      <div className="ant-list-item-meta post__item-meta">
                        <div className="ant-list-item-meta-content">
                          <h4 className="ant-list-item-meta-title"><span>nancy hugo 回复了 </span><a className="post__item-title" href="">{item.title}</a></h4>
                          <p className="message__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                          <div className="ant-list-item-meta-description">
                            <div className="post__item-info">
                              <span className="text-middle">4 小时前</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List.Item>
                  )}
                />
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

Message.PropTypes = {
  isLogin: PropTypes.bool
};

Message.defaultProps = {
  isLogin: false
};

export default connect(({
  user
}) => {
  return {
    isLogin: user.isUserAuthenticated.isLogin
  };
}, {
})(Message);