import {Layout, Menu, Dropdown, Icon, Button, Tabs, List, Avatar, Row, Col} from 'antd';
import React, {Component} from 'react';
import Header from '../layout/header.jsx';

import '../../styles/common.less';

const {
  Content
} = Layout;

class HomeContainer extends Component {
  componentWillMount() {}

  componentWillReceiveProps() {}

  render() {
    const TabPane = Tabs.TabPane;
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
        <Header />
        <Content>
          <Tabs className="sub-header" defaultActiveKey="1" animated={false}>
            <TabPane tab="全部" key="1">
              <div className="post__container container">
                <Row type="flex" justify="space-between" align="top" gutter={24}>
                  <Col span={17}>
                    <List
                      className="post__avatar-list"
                      itemLayout="horizontal"
                      dataSource={data}
                      renderItem={item => (
                        <List.Item className="post__item">
                          <div class="ant-list-item-meta post__item-meta">
                            <div class="ant-list-item-meta-avatar">
                              <Avatar size={52} icon="user" />
                            </div>
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
            </TabPane>
            <TabPane tab="询问" key="2">
              <div className="post__container container">
                <Row type="flex" justify="space-between" align="top" gutter={24}>
                  <Col span={17}>
                    <div className="post__header">
                      <div className="post__question-icon">
                        <Icon type="question" />
                      </div>
                      <h2 className="post__subtitle">询问</h2>
                    </div>
                    <List
                      className="post__has-header"
                      itemLayout="horizontal"
                      dataSource={data}
                      renderItem={item => (
                        <List.Item className="post__item">
                          <div class="ant-list-item-meta post__item-meta">
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
            </TabPane>
            <TabPane tab="Tab 3" key="3"></TabPane>
          </Tabs>
        </Content>
      </Layout>
    );
  }
}

HomeContainer.PropTypes = {};

export default HomeContainer;