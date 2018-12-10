import PropTypes from 'prop-types';

import React, {Component} from 'react';
import {Tabs, Row, Col} from 'antd';
import LayoutContainer from '../layout/container.jsx';
import PostList from '../components/post-list.jsx';

const {TabPane} = Tabs;

class HomeContainer extends Component {
  render() {
    const {tabs} = this.props;

    return (
      <LayoutContainer>
        <Tabs className="sub-header" defaultActiveKey="0" animated={false}>
          <TabPane tab="全部" key="0">
            <div className="post__container container">
              <Row type="flex" justify="space-between" align="top" gutter={24}>
                <Col span={17}>
                  <PostList hasAvatar={true}/>
                </Col>
                <Col span={7}>
                  {/* <SideList/> */}
                </Col>
              </Row>
            </div>
          </TabPane>
          {
            tabs.map((tab) => {
              const key = tab.id;

              return (
                <TabPane tab={tab.name} key={key.toString()}>
                  <div className="post__container container">
                    <Row type="flex" justify="space-between" align="top" gutter={24}>
                      <Col span={17}>
                        <PostList hasAvatar={true}/>
                      </Col>
                      <Col span={7}>
                        {/* <SideList/> */}
                      </Col>
                    </Row>
                  </div>
                </TabPane>
              );
            })
          }
        </Tabs>
      </LayoutContainer>
    );
  }
}

HomeContainer.propTypes = {
  tabs: PropTypes.arrayOf({
    id: PropTypes.number,
    name: PropTypes.string
  })
};

HomeContainer.defaultProps = {
  tabs: [{
    id: 1,
    name: "讨论"
  },
  {
    id: 2,
    name: "询问"
  },
  {
    id: 3,
    name: "记录"
  },
  {
    id: 4,
    name: "牙套"
  },
  {
    id: 5,
    name: "智齿"
  },
  {
    id: 6,
    name: "种植"
  }]
};

export default HomeContainer;