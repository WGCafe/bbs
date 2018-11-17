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
      <Layout className="layout">
        <Header>
          <div className="logo" />
        </Header>
        <Content style={{padding: '0 50px'}}>
          <div style={{background: '#fff'}}>Content</div>
        </Content>
        <Footer style={{textAlign: 'center'}}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

HomeContainer.PropTypes = {};

export default HomeContainer;