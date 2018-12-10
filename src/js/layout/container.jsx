import React, {Component} from 'react';
import {Layout} from 'antd';
import Header from '../layout/header.jsx';

import '../../styles/common.less';

const {Content} = Layout;


class LayoutContainer extends Component {
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

export default LayoutContainer;