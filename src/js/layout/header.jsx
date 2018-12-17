import {Layout, Menu, Dropdown, Icon, Button} from 'antd';
import React, {Component} from 'react';

import '../../styles/common.less';

class Header extends Component {
  componentWillMount() {}

  componentWillReceiveProps() {}

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="3">
          <a target="_blank" rel="noopener noreferrer" href="#/message">2 新消息</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="0">
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">编辑个人资料</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">退出</a>
        </Menu.Item>
      </Menu>
    );

    return (
      <Layout.Header className="header">
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
      </Layout.Header>
    );
  }
}

Header.propTypes = {};

export default Header;