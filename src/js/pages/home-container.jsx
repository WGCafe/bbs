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
          {
            tabs.map((tab) => {
              return (
                <TabPane tab={tab.name} key={tab.id}>
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
  tabs: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })
};

export default HomeContainer;