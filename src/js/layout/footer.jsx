import {Layout} from 'antd';
import React, {Component} from 'react';

import '../../styles/common.less';

class Footer extends Component {
  componentWillMount() {}

  componentWillReceiveProps() {}

  render() {
    return (
      <Layout.Footer className="user__footer">
        <div>
          <div className="media-top">
            <img src="https://via.placeholder.com/57x57" alt=""/>
          </div>
          <div className="user__footer-title media-top">
            <h2 className="user__footer-subtitle">这里是一个标题</h2>
            <label className="user__footer-text">修修补补又一年</label>
          </div>
        </div>
        <div className="user__footer-content">
          <p className="user__footer-text">bibendum <a>text link.</a> Proin gravida dolor sit .</p>
          <p className="user__footer-text">bibendum laoreet. Proin gravida dolor sit </p>
        </div>
        <div className="user__footer-copyright text-right">
          <span className="user__footer-text">© 2018 Lan Ya Ltd.</span>
        </div>
      </Layout.Footer>
    );
  }
}

Footer.PropTypes = {};

export default Footer;