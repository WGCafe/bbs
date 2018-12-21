import React, {Component} from 'react';
import {Layout} from 'antd';
import Header from '../layout/header.jsx';
import {withCookies} from 'react-cookie';
import {isUserAuthenticated} from 'user-action';

import '../../styles/common.less';

const {Content} = Layout;


class LayoutContainer extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.token === this.props.user.token) {
      // Set user login state here, if not equal, set if user is login
    }
  }

  componentWillMount() {
    const {cookies} = this.props;

    /*eslint-disable no-console*/
    console.log(cookies.getAll());
    console.log("Hello, can you see me");

    cookies.get('name');
    this.props.isUserAuthenticated(cookies.getAll());
  }

  render() {
    const {children} = this.props;

    return (
      <Layout className="layout">
        <Header />
        <Content>
          {children}
        </Content>
      </Layout>
    );
  }
}

LayoutContainer.propTypes = {
};

export default withCookies(({
  user
}) => {
  return {
    // user: user.userSignUp
    isLogin: user.isUserAuthenticated
  };
}, {
  isUserLogin: isUserAuthenticated
})(LayoutContainer);