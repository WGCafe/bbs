import LayoutContainer from '../layout/container.jsx';
import React, {Component} from 'react';
import {Avatar, Col, Divider, Button, Input} from 'antd';

import '../../styles/common.less';

class ProfileEdit extends Component {
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
            <div className="profile__edit-content profile__edit-header">
              <span className="profile__edit-title">编辑个人资料</span>
            </div>
            <div className="profile__edit-content">
              <span className="profile__edit-title">头像</span>
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
              <span>上传新头像</span>
            </div>
            <div className="profile__edit-content">
              <span className="profile__edit-title">基本资料</span>
              <Input size="large" placeholder="用户名" />
              <Input size="large" placeholder="邮箱" />
              <Input size="large" placeholder="所在地" />
            </div>
            <div className="profile__edit-content">
              <span className="profile__edit-title">基本资料</span>
              <Input size="large" placeholder="新密码" />
            </div>
            <Divider />
            <Button type="primary">保存</Button>
          </Col>
        </div>
      </LayoutContainer>
    );
  }
}

ProfileEdit.propTypes = {};

export default ProfileEdit;