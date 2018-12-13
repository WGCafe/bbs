import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getArticleTypeList} from './actions/article-type-actions';
import {getArticleList} from './actions/article-actions';

import React, {Component} from 'react';
import {Tabs, Row, Col} from 'antd';
import LayoutContainer from '../layout/container.jsx';
import PostList from '../components/post-list.jsx';

const {TabPane} = Tabs;
const PAGE_SIZE = 20;

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: "0",
      page: 1
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  componentWillMount() {
    this.props.getArticleTypeList();
  }

  componentDidUpdate() {
    const {tabs} = this.props;
    const {
      page,
      activeKey
    } = this.state;

    if (!tabs.length) {
      return;
    }

    this.props.getArticleList({
      page,
      page_size: PAGE_SIZE,
      category: activeKey
    });
  }

  fetchCurrentPostList() {
    //TODO add active key list action
  }

  handleTabClick(activeKey) {
    this.fetchCurrentPostList();
    this.setState({activeKey});
  }

  renderTabPane(tabOptions) {
    if (!tabOptions) {
      return null;
    }

    const {postList} = this.props;
    const {activeKey} = this.state;

    return (
      <TabPane tab={tabOptions.name} key={tabOptions.currentKey}>
        <div className="post__container container">
          <Row type="flex" justify="space-between" align="top" gutter={24}>
            <Col span={17}>
              {
                activeKey === tabOptions.currentKey ? (
                  <PostList postList={postList} isAll={true}/>
                ) : null
              }
            </Col>
            <Col span={7}>
              {/* <SideList/> */}
            </Col>
          </Row>
        </div>
      </TabPane>
    );
  }

  render() {
    const {tabs} = this.props;
    const {activeKey} = this.state;

    return (
      <LayoutContainer>
        <Tabs
          className="sub-header"
          activeKey={activeKey}
          animated={false}
          onTabClick={this.handleTabClick}
        >
          {this.renderTabPane({
            name: "全部",
            currentKey: "0"
          })}
          {
            tabs.map((tab) => {
              const key = tab.id;
              const currentKey = key.toString();

              return this.renderTabPane({
                name: tab.name,
                currentKey
              });
            })
          }
          {this.renderTabPane({
            name: "收藏的话题",
            currentKey: (tabs.length + 1).toString()
          })}
        </Tabs>
      </LayoutContainer>
    );
  }
}

HomeContainer.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })),
  postList: PropTypes.arrayOf(PropTypes.object)
};

HomeContainer.defaultProps = {
  postList: []
};

export default connect(({articlesType}) => {
  return {
    tabs: articlesType.articleTypeList
  };
}, {
  getArticleTypeList,
  getArticleList
})(HomeContainer);