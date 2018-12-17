import {Layout} from 'antd';
import React, {Component} from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import {required, email, minLength} from '../utils/validation.jsx';
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
              <Form className="sign-in__form-container" action="">
                <div className="user__form-group">
                  <label>
                    邮箱
                    <Input
                      name="email"
                      placeholder="邮箱"
                      className="ant-input ant-input-lg"
                      validations={[required, email]}
                    />
                  </label>
                </div>
                <div className="user__form-group">
                  <label>
                    密码
                    <Input
                      type="password"
                      name="password"
                      minLength={6}
                      className="ant-input ant-input-lg"
                      validations={[required, minLength]}
                    />
                  </label>
                </div>
                <div className="sign-in__buttons user__form-group text-center">
                  <Button
                    className="ant-btn ant-btn-primary ant-btn-lg text-bottom"
                  >
                    <span>登陆</span>
                  </Button>
                  <a className="sign-in__buttons-link text-bottom" href="">忘记密码</a>
                </div>
              </Form>

              <div className="user__form-group register text-center">
                <label className="sign-in__label">还没有注册？</label>
                <div>
                  <button size="large" type="primary">立即注册</button>
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

Signin.propTypes = {};

export default Signin;