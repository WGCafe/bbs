import {Layout, Menu, Dropdown, Icon, Button, Tabs, List, Avatar, Row, Col} from 'antd';
import React, {Component} from 'react';
import '../../styles/common.less';

const {
  Header,
  Content
} = Layout;

class HomeContainer extends Component {
  componentWillMount() {}

  componentWillReceiveProps() {}

  render() {
    const TabPane = Tabs.TabPane;
    const menu = (
      <Menu>
        <Menu.Item key="3" disabled>2 新消息</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="0">
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">编辑个人资料</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">退出</a>
        </Menu.Item>
      </Menu>
    );
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
          <div className="header__logo text-middle" />
          <Menu
            className="text-middle"
            mode="horizontal"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">记录</Menu.Item>
            <Menu.Item key="3">
              <i className="dot-icon">
                <span></span>
              </i>
            </Menu.Item>
          </Menu>
          <div className="operation">
            <Dropdown overlay={menu}>
              <a className="operation-dropdown ant-dropdown-link" href="#">
                <span className="text-middle">z.zhou</span>
                <Icon className="operation-dropdown__caret text-middle" type="caret-down" />
              </a>
            </Dropdown>
            <Button className="operation__search" icon="search" />
            <Button type="primary">发布新话题</Button>
          </div>
        </Header>
        <Content>
          <Tabs className="sub-header" defaultActiveKey="1" animated={false}>
            <TabPane tab="全部" key="1">
              <div className="post__container container">
                <Row type="flex" justify="space-between" align="top" gutter={24}>
                  <Col span={17}>
                    <List
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
                    <List
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