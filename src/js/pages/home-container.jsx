import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getArticleTypeList} from './actions/article-type-actions';
import {getArticleList} from './actions/article-actions';
import {getCollectionList} from './actions/collection-actions';
import CommonUtils from '../utils/common-util';
import Constants from '../utils/constants';

import React, {Component} from 'react';
import {Tabs, Row, Col} from 'antd';
import LayoutContainer from '../layout/container.jsx';
import PostList from '../components/post-list.jsx';

const {OPERATION_TYPES} = Constants;
const {TabPane} = Tabs;
const PAGE_SIZE = 20;
const COLLECTION_TYPE_NAME = '收藏';
const DEFAULT_TAB = '0';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: DEFAULT_TAB,
      page: 1
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  componentWillMount() {
    this.props.getArticleTypeList();
  }

  componentWillReceiveProps(nextProps) {
    const {tabs} = this.props;
    const {tabs: nextTabs} = nextProps;

    if (nextTabs.length && JSON.stringify(tabs) !== JSON.stringify(nextTabs)) {
      this.getArticleListData();
    }
  }

  getArticleListData(activeKey) {
    const {
      page
    } = this.state;
    const options = {
      page,
      page_size: PAGE_SIZE
    };

    if (activeKey && activeKey !== DEFAULT_TAB) {
      Object.assign(options, {
        category: activeKey
      });
    }

    this.props.getArticleList(options);
  }

  getCollectionListData() {
    if (!OPERATION_TYPES || !COLLECTION_TYPE_NAME) {
      return;
    }

    const {isLogin} = this.props;

    CommonUtils.turnToSignIn(isLogin);

    const cllectionIndex = OPERATION_TYPES.findIndex(item => item === COLLECTION_TYPE_NAME);

    if (cllectionIndex !== -1) {
      this.props.getCollectionList({
        operation_type: cllectionIndex
      });
    }
  }

  handleTabClick(activeKey) {
    const {tabs} = this.props;

    if (Number(activeKey) !== Number(tabs.length + 1)) {
      this.getArticleListData(activeKey);
    } else {
      this.getCollectionListData();
    }

    this.setState({activeKey});
  }

  handleToggleLike() {
    const {isLogin} = this.props;

    CommonUtils.turnToSignIn(isLogin);
  }

  renderTabPane(tabOptions) {
    if (!tabOptions) {
      return null;
    }

    const {
      tabs,
      postList,
      collections
    } = this.props;
    const {activeKey} = this.state;

    return (
      <TabPane tab={tabOptions.name} key={tabOptions.currentKey}>
        <div className="post__container container">
          <Row type="flex" justify="space-between" align="top" gutter={24}>
            <Col span={17}>
              {
                activeKey === tabOptions.currentKey ? (
                  <PostList
                    postList={Number(activeKey) !== Number(tabs.length + 1) ? postList : collections}
                    isAll={true}
                    toggleLike={this.handleToggleLike.bind(this)}
                  />
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
            currentKey: DEFAULT_TAB
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
  isLogin: PropTypes.bool,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })),
  postList: PropTypes.arrayOf(PropTypes.object),
  collections: PropTypes.arrayOf(PropTypes.object)
};

HomeContainer.defaultProps = {
  isLogin: false,
  tabs: [],
  postList: [],
  collections: []
};

export default connect(({
  user,
  articleType,
  articles,
  collection
}) => {
  return {
    isLogin: user.isUserAuthenticated.isLogin,
    tabs: articleType.articleTypeList,
    postList: articles.articleList.articles,
    collections: collection.collectionList.articles
  };
}, {
  getArticleTypeList,
  getArticleList,
  getCollectionList
})(HomeContainer);