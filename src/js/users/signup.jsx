import {Layout} from 'antd';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../layout/header.jsx';
import Footer from '../layout/footer.jsx';
import {required, email, minLength} from '../utils/validation.jsx';
import {getUserSignUp} from '../pages/actions/user-actions';

import '../../styles/common.less';

const {
  Content
} = Layout;

class Signup extends Component {
  componentWillMount() {
    if (this.props.user.token) {
      window.location = '/';
    }
  }

  componentWillReceiveProps() {
    if (this.props.user.token) {
      window.location = '/';
    }
  }

  signUp() {
    const signUpInfo = this.signUpForm.getValues();

    this.props.userSignUp(signUpInfo);
  }

  render() {
    return (
      <Layout className="layout">
        <Header />
        <Content>
          <div className="user__container">
            <h2 className="user__title text-center">注册</h2>

            <div className="user__form">
              <Form
                name="signUp_form"
                action=""
                ref={dom => {
                  this.signUpForm = dom;
                }}
              >
                <div className="user__form-group">
                  <label>
                    用户名
                    <Input
                      size="large"
                      name="username"
                      placeholder="用户名"
                      className="ant-input ant-input-lg"
                      validations={[required]}
                    />
                  </label>
                </div>
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
                <div
                  className="user__form-group register text-center"
                >
                  <Button
                    className="ant-btn ant-btn-primary ant-btn-lg"
                    onClick={this.signUp.bind(this)}
                  >
                    <span>注册</span>
                  </Button>
                </div>
              </Form>
            </div>
          </div>
          <Footer />
        </Content>
      </Layout>
    );
  }
}

Signup.propTypes = {};

export default connect(({
  user
}) => {
  return {
    user: user.userSignUp
  };
}, {
  userSignUp: getUserSignUp
})(Signup);