import {Layout, Menu, Dropdown, Icon, Button, Radio, Input} from 'antd';
import React, {Component} from 'react';
import '../../styles/common.less';

const {
  Header,
  Content,
  Footer
} = Layout;

class Signup extends Component {
  componentWillMount() {}

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
          <div className="user__container">
            <h2 className="user__title text-center">注册</h2>

            <div className="user__form">
              <form action="">
                <div className="user__form-group">
                  <Input size="large" placeholder="用户名" />
                </div>
                <div className="user__form-group">
                  <Input size="large" placeholder="邮箱" />
                </div>
                <div className="user__form-group">
                  <Input size="large" placeholder="密码" />
                </div>
                <div className="user__form-group">
                  <Radio>我是牙医</Radio>
                </div>
                <div className="user__form-group">
                  <Input size="large" placeholder="所在机构／单位（选填）" />
                </div>
                <div className="user__form-group register text-center">
                  <Button size="large" type="primary">注册</Button>
                </div>
              </form>
            </div>
          </div>
          <Footer className="user__footer">
            <div>
              <div className="media-top">
                <img src="https://via.placeholder.com/57x57" alt=""/>
              </div>
              <div className="user__footer-title media-top">
                <h2 className="user__footer-subtitle">这里是一个标题</h2>
                <label className="user__footer-text">修修补补又一年</label>
              </div>
            </div>
            <div className="user__footer-content">
              <p className="user__footer-text">bibendum <a>text link.</a> Proin gravida dolor sit .</p>
              <p className="user__footer-text">bibendum laoreet. Proin gravida dolor sit </p>
            </div>
            <div className="user__footer-copyright text-right">
              <span className="user__footer-text">© 2018 Lan Ya Ltd.</span>
            </div>
          </Footer>
        </Content>
      </Layout>
    );
  }
}

Signup.PropTypes = {};

export default Signup;