import {Layout} from 'antd';
import React, {Component} from 'react';
import '../../styles/common.less';

const {
  Header,
  Footer,
  Content
} = Layout;

class HomeContainer extends Component {
  componentWillMount() {}

  componentWillReceiveProps() {}

  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

HomeContainer.PropTypes = {};

export default HomeContainer;