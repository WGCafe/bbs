import LayoutContainer from '../layout/container.jsx';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Tabs, Avatar, Col, Icon} from 'antd';
import {getUserProfile} from '../pages/actions/profile-actions';
// import MyPost from './my-post';

import '../../styles/common.less';

const {TabPane} = Tabs;

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {
    this.props.getUserProfile({
      userId: 'fake-userId'
    });
  }

  componentWillReceiveProps() {}

  render() {
    const {name, location, registerTime, avatar} = this.props.myProfile;

    return (
      <LayoutContainer>
        <div className="post__container container">
          <Col span={17} className="profile__container">
            <div className="user__profile">
              <div className="user__profile-avatar">
                <Avatar size={64}
                  src={avatar}
                  icon="user"
                />
              </div>
              <div className="user__profile-info">
                <div className="user__profile-content">
                  <span>{name}</span>
                </div>
                <div className="user__profile-content">
                  <Icon type="home" />
                  <span>{this.props.name}</span>
                  <span>{location}</span>
                </div>
                <div className="user__profile-content">
                  <Icon type="home" />
                  <span>{this.props.name}</span>
                  <span>{registerTime}</span>
                </div>
              </div>
              <div className="user__profile-edit">
                <a href="#/me-edit">编辑</a>
              </div>
            </div>
            <Tabs defaultActiveKey="1">
              <TabPane tab="主题" key="1">
                <p>Content of Tab Pane 1</p>
                <p>Content of Tab Pane 1</p>
                <p>Content of Tab Pane 1</p>
              </TabPane>
              <TabPane tab="回复" key="2">
                <p>Content of Tab Pane 2</p>
                <p>Content of Tab Pane 2</p>
                <p>Content of Tab Pane 2</p>
              </TabPane>
            </Tabs>
          </Col>
        </div>
      </LayoutContainer>
    );
  }
}

UserProfile.propTypes = {};

export default connect(({
  profile
}) => {
  return {
    myProfile: profile.myProfile
  };
}, {
  getUserProfile
})(UserProfile);