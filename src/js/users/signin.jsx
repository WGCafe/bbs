import LayoutContainer from '../layout/container.jsx';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withCookies} from 'react-cookie';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import {required, email, minLength} from '../utils/validation.jsx';
import {getUserSignIn} from '../pages/actions/user-actions';

import '../../styles/common.less';

class Signin extends Component {
  componentWillMount() {}

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.token
      && nextProps.user.token !== this.props.user.token) {
      const {cookies} = this.props;

      cookies.set('token', nextProps.user.token);

      return true;
    }

    if (nextProps.isLogin) {
      window.location = '/';
    }

    return false;
  }

  signIn(e) {
    e.preventDefault();
    const signInInfo = this.signInForm.getValues();

    this.props.signIn(signInInfo);
  }

  render() {
    return (
      <LayoutContainer>
        <div className="sign-in__container user__container">
          <h2 className="user__title has-subtitle text-center">欢迎回来</h2>
          <div className="user__subtitle text-center">
            <span></span>
          </div>

          <div className="user__form">
            <Form
              className="sign-in__form-container"
              action=""
              ref={dom => {
                this.signInForm = dom;
              }}>
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
                  onClick={this.signIn.bind(this)}
                >
                  <span>登陆</span>
                </Button>
                <a className="sign-in__buttons-link text-bottom" href="">忘记密码</a>
              </div>
            </Form>

            <div className="user__form-group register text-center">
              <label className="sign-in__label">还没有注册？</label>
              <a className="ant-btn ant-btn-primary ant-btn-lg" href="/signup">立即注册</a>
            </div>
          </div>
        </div>
      </LayoutContainer>
    );
  }
}

Signin.propTypes = {};

export default withCookies(connect(({
  user
}) => {
  return {
    user: user.userSignIn,
    isLogin: user.isUserAuthenticated.isLogin
  };
}, {
  signIn: getUserSignIn
})(Signin));