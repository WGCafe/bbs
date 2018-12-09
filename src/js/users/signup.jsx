import {Layout, Button, Radio, Input} from 'antd';
import React, {Component} from 'react';
import Header from '../layout/header.jsx';
import Footer from '../layout/footer.jsx';

import '../../styles/common.less';

const {
  Content
} = Layout;

class Signup extends Component {
  componentWillMount() {}

  componentWillReceiveProps() {}

  render() {
    return (
      <Layout className="layout">
        <Header />
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
          <Footer />
        </Content>
      </Layout>
    );
  }
}

Signup.propTypes = {};

export default Signup;