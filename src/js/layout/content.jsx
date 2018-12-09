import {Layout} from 'antd';
import React, {Component} from 'react';

import '../../styles/common.less';

const {Content} = Layout;

class MainContent extends Component {
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

MainContent.propTypes = {};

export default MainContent;