import {Layout, Menu, Dropdown, Icon, Button, Input} from 'antd';
import React, {Component} from 'react';
import Header from '../layout/header.jsx';
import Footer from '../layout/footer.jsx';

import '../../styles/common.less';

const {
  Content
} = Layout;

class ResetPassword extends Component {
  componentWillMount() {}

  componentWillReceiveProps() {}

  render() {
    return (
      <Layout className="layout">
        <Header />
        <Content>
          <div className="reset__container user__container">
            <h2 className="user__title has-subtitle text-center">重置密码</h2>
            <div className="user__subtitle text-center">
              <span>通过电子邮件重置密码，24 小时内至多可以重新设置密码 2 次</span>
            </div>

            <div className="user__form">
              <form action="">
                <div className="user__form-group">
                  <Input size="large" placeholder="邮箱" />
                </div>
                <div className="sign-in__buttons user__form-group text-center">
                  <Button class="text-bottom" size="large" type="primary">提交</Button>
                </div>
              </form>
            </div>
          </div>
          <Footer />
        </Content>
      </Layout>
    );
  }
}

ResetPassword.PropTypes = {};

export default ResetPassword;