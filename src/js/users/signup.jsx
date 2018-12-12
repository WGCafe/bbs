import {Layout} from 'antd';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import React, {Component} from 'react';
import Header from '../layout/header.jsx';
import Footer from '../layout/footer.jsx';
import {required, email, minLength} from '../utils/validation.jsx';

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
              <Form>
                <div className="user__form-group">
                  <label>
                    用户名
                    <Input
                      size="large"
                      name="username"
                      placeholder="用户名"
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
                      validations={[required, minLength]}
                    />
                  </label>
                </div>
                <div>
                  <Button>Submit</Button>
                </div>
              </Form>
              {/* <form action="">
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
              </form> */}
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