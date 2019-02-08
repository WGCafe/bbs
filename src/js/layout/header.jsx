import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';

import {Layout, Menu, Dropdown, Icon, Button} from 'antd';

import '../../styles/common.less';

class Header extends Component {
  componentWillMount() {}

  componentWillReceiveProps() {}

  renderSignButton() {
    return (
      <div className="operation__sigin">
        <Link to="/signup">注册</Link>
        <span> / </span>
        <Link to="/signin">登录</Link>
      </div>
    );
  }

  renderMenu() {
    return (
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
  }

  render() {
    const {isLogin} = this.props;
    const newArticleUrl = isLogin ? '/new-article' : '/signin';

    return (
      <Layout.Header className="header">
        <Link className="header__logo-link" to="/">
          <div className="header__logo text-middle" />
        </Link>
        <Menu
          className="text-middle"
          mode="horizontal"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1">
            <a href="/">话题</a>
          </Menu.Item>
        </Menu>
        <div className="operation">
          {
            isLogin
              ? (
                <Dropdown placement="bottomRight" overlay={this.renderMenu()}>
                  <div className="operation-dropdown ant-dropdown-link">
                    <span className="text-middle">z.zhou</span>
                    <Icon className="operation-dropdown__caret text-middle" type="caret-down" />
                  </div>
                </Dropdown>
              )
              : this.renderSignButton()
          }
          <Button className="operation__search" icon="search" />
          <Link className="ant-btn ant-btn-primary" to={newArticleUrl}>
            <span>发布新话题</span>
          </Link>
        </div>
      </Layout.Header>
    );
  }
}

Header.propTypes = {
  isLogin: PropTypes.bool
};

Header.defaultProps = {
  isLogin: false
};

export default connect(({
  user
}) => {
  return {
    isLogin: user.isUserAuthenticated.isLogin
  };
})(Header);