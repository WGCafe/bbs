import LayoutContainer from '../layout/container.jsx';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Tabs, Avatar, Col, Icon} from 'antd';
import {getMyProfile, getMyPosts, getMyComments} from '../pages/actions/profile-actions';
import MyPost from './my-post.jsx';
import MyComment from './my-comment.jsx';

import '../../styles/common.less';

const {TabPane} = Tabs;

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {
    this.props.getMyProfile({
      userId: 'fake-userId'
    });
    this.props.getMyPosts({
      userId: 'fake-userId'
    });
  }

  renderTabContent(key) {
    switch (key) {
      case "1":
        this.props.getMyPosts({
          userId: 'fake-userId'
        });
        break;
      case "2":
        this.props.getMyComments({
          userId: 'fake-userId'
        });
        break;
      default:
        this.props.getMyProfile({
          userId: 'fake-userId'
        });
    }
  }

  componentWillReceiveProps() {}

  render() {
    const {name, location, registerTime, avatar} = this.props.myProfile;
    const {myPosts, myComments} = this.props;

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
            <Tabs defaultActiveKey="1"  onChange={(key) => this.renderTabContent(key)}>
              <TabPane tab="主题" key="1">
                {
                  myPosts.map(post => <MyPost myPost={post} key={post.id}/>)
                }
              </TabPane>
              <TabPane tab="回复" key="2">
                {
                  myComments.map(comment => <MyComment myComment={comment} key={comment.id}/>)
                }
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
    myProfile: profile.myProfile.myProfile || {},
    myPosts: profile.myPosts.myPosts || [],
    myComments: profile.myComments.myComments || []
  };
}, {
  getMyProfile,
  getMyPosts,
  getMyComments
})(UserProfile);