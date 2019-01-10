import LayoutContainer from '../layout/container.jsx';
import React, {Component} from 'react';
import {Tabs, Avatar, Col, Icon} from 'antd';

import '../../styles/common.less';

const {TabPane} = Tabs;

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps() {}

  render() {
    return (
      <LayoutContainer>
        <div className="post__container container">
          <Col span={17} className="profile__container">
            <div className="user__profile">
              <div className="user__profile-avatar">
                <Avatar size={64}
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546687975222&di=4301421c6f6f43eb14ca4f35ed1cf338&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201705%2F21%2F20170521090448_5NtYa.jpeg"
                  icon="user"
                />
              </div>
              <div className="user__profile-info">
                <div className="user__profile-content">
                  <span>Zhou</span>
                </div>
                <div className="user__profile-content">
                  <Icon type="home" />
                  <span>Zhou</span>
                </div>
                <div className="user__profile-content">
                  <Icon type="home" />
                  <span>Zhou</span>
                </div>
              </div>
              <div className="user__profile-edit">
                <a href="#/me-edit">编辑</a>
              </div>
            </div>
            <Tabs defaultActiveKey="1">
              <TabPane tab="主题" key="1">话题</TabPane>
              <TabPane tab="回复" key="2">回复</TabPane>
            </Tabs>
          </Col>
        </div>
      </LayoutContainer>
    );
  }
}

UserProfile.propTypes = {};

export default UserProfile;