import {connect} from 'react-redux';
import {createArticle} from './actions/article-actions';

import {} from 'antd';
import React, {Component} from 'react';
import LayoutContainer from '../layout/container.jsx';

class NewArticle extends Component {
  componentWillMount() {
  }

  componentWillReceiveProps() { }

  render() {
    return (
      <LayoutContainer>
      </LayoutContainer>
    );
  }
}

NewArticle.propTypes = {};

export default connect(({}) => {
  return {
  };
}, {
  createArticle
})(NewArticle);