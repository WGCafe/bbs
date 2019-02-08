import React, {Component} from 'react';
import {Layout} from 'antd';
import {connect} from 'react-redux';
import Header from '../layout/header.jsx';
import {withCookies} from 'react-cookie';
import {checkUserAuthentication} from '../pages/actions/user-actions';

import '../../styles/common.less';

const {Content} = Layout;


class LayoutContainer extends Component {
  componentWillMount() {}

  componentDidMount() {
    const {cookies} = this.props;
    const userToken = cookies.get('token');

    this.props.checkUserAuthentication({
      userToken
    });
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

export default withCookies(connect(({
  user
}) => {
  return {
    isLogin: user.isUserAuthenticated.isLogin
  };
}, {
  checkUserAuthentication
})(LayoutContainer));