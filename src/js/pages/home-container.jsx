import {Layout, Icon, Tabs, Row, Col} from 'antd';
import React, {Component} from 'react';
import Header from '../layout/header.jsx';
import PostList from '../components/post-list.jsx';
import SideList from '../components/side-list.jsx';

import '../../styles/common.less';

const {
  Content
} = Layout;

class HomeContainer extends Component {
  componentWillMount() {}

  componentWillReceiveProps() {}

  render() {
    const TabPane = Tabs.TabPane;

    return (
      <Layout className="layout">
        <Header />
        <Content>
          <Tabs className="sub-header" defaultActiveKey="1" animated={false}>
            <TabPane tab="全部" key="1">
              <div className="post__container container">
                <Row type="flex" justify="space-between" align="top" gutter={24}>
                  <Col span={17}>
                    <PostList hasAvatar={true}/>
                  </Col>
                  <Col span={7}>
                    <SideList/>
                  </Col>
                </Row>
              </div>
            </TabPane>
            <TabPane tab="询问" key="2">
              <div className="post__container container">
                <Row type="flex" justify="space-between" align="top" gutter={24}>
                  <Col span={17}>
                    <div className="post__header">
                      <div className="post__question-icon">
                        <Icon type="question" />
                      </div>
                      <h2 className="post__subtitle">询问</h2>
                    </div>
                    <PostList hasAvatar={false} />
                  </Col>
                  <Col span={7}>
                    <SideList />
                  </Col>
                </Row>
              </div>
            </TabPane>
          </Tabs>
        </Content>
      </Layout>
    );
  }
}

HomeContainer.PropTypes = {};

export default HomeContainer;