import {Layout, Menu, Dropdown, Icon, Button, List, Row, Col} from 'antd';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CommonUtils from '../utils/common-util';

const {
  Header,
  Content
} = Layout;

class Search extends Component {
  componentWillMount() {}

  componentDidMount() {
    const {isLogin} = this.props;

    CommonUtils.turnToSignIn(isLogin);
  }

  componentWillReceiveProps() {}

  render() {
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
          <div className="message__container container">
            <Row type="flex" justify="space-between" align="top" gutter={24}>
              <Col span={17}>
                <div className="message__header">
                  <h3 className="message__title">消息</h3>
                </div>
                <div>
                  <form action="">
                  </form>
                </div>
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

Search.propTypes = {
  isLogin: PropTypes.bool
};

Search.defaultProps = {
  isLogin: false
};

export default connect(({
  user
}) => {
  return {
    isLogin: user.isUserAuthenticated.isLogin
  };
}, {
})(Search);