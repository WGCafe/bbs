import {Layout, Icon, Tabs, List, Row, Col} from 'antd';
import React, {Component} from 'react';
import Header from '../layout/header.jsx';
import PostList from '../components/post-list.jsx';

import '../../styles/common.less';

const {
  Content
} = Layout;

class HomeContainer extends Component {
  componentWillMount() {}

  componentWillReceiveProps() {}

  render() {
    const TabPane = Tabs.TabPane;
    const data2 = [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.'
    ];

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
                    <List
                      className="side-list"
                      split={false}
                      header={<div><h2 className="side-list__title">Community Guidelines</h2></div>}
                      dataSource={data2}
                      renderItem={item => (
                        <List.Item>
                          <h4 className="side-list__item-title">Aenean euismod</h4>
                          <p className="side-list__item-detail">{item}</p>
                        </List.Item>
                      )}
                    />
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
                    <List
                      className="side-list"
                      split={false}
                      header={<div><h2 className="side-list__title">Community Guidelines</h2></div>}
                      dataSource={data2}
                      renderItem={item => (
                        <List.Item>
                          <h4 className="side-list__item-title">Aenean euismod</h4>
                          <p className="side-list__item-detail">{item}</p>
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
              </div>
            </TabPane>
            <TabPane tab="Tab 3" key="3"></TabPane>
          </Tabs>
        </Content>
      </Layout>
    );
  }
}

HomeContainer.PropTypes = {};

export default HomeContainer;