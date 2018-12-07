import {Layout, Button, Input} from 'antd';
import React, {Component} from 'react';
import Header from '../layout/header.jsx';
import Footer from '../layout/footer.jsx';

import '../../styles/common.less';

const {
  Content
} = Layout;

class Signin extends Component {
  componentWillMount() {}

  componentWillReceiveProps() {}

  render() {
    return (
      <Layout className="layout">
        <Header />
        <Content>
          <div className="sign-in__container user__container">
            <h2 className="user__title has-subtitle text-center">欢迎回来</h2>
            <div className="user__subtitle text-center">
              <span></span>
            </div>

            <div className="user__form">
              <form className="sign-in__form-container" action="">
                <div className="user__form-group">
                  <Input size="large" placeholder="邮箱" />
                </div>
                <div className="user__form-group">
                  <Input size="large" placeholder="密码" />
                </div>
                <div className="sign-in__buttons user__form-group text-center">
                  <Button class="text-bottom" size="large" type="primary">登录</Button>
                  <a className="sign-in__buttons-link text-bottom" href="">忘记密码</a>
                </div>
              </form>

              <div className="user__form-group register text-center">
                <label className="sign-in__label">还没有注册？</label>
                <div>
                  <Button size="large" type="primary">立即注册</Button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </Content>
      </Layout>
    );
  }
}

Signin.PropTypes = {};

export default Signin;