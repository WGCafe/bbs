import {Layout} from 'antd';
import React, {Component} from 'react';
import Header from '../layout/header.jsx';

import '../../styles/common.less';

const {Content} = Layout;

class HomeContainer extends Component {
  componentWillMount() {}

  componentWillReceiveProps() {}

  render() {
    const {children} = this.props;

    return (
      <Content>
        {children}
      </Content>
    );
  }
}

HomeContainer.PropTypes = {};

export default HomeContainer;