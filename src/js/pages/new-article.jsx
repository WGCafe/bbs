import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createArticle} from './actions/article-actions';

import {Row, Col, Card, Form, Input, Upload, message, Icon, Radio, Button} from 'antd';
import React, {Component} from 'react';
import LayoutContainer from '../layout/container.jsx';

const {TextArea} = Input;

class NewArticle extends Component {
  componentWillMount() {
  }

  componentWillReceiveProps() { }

  render() {
    const props = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text'
      },
      onChange(info) {
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    };

    return (
      <LayoutContainer>
        <div className="container">
          <Row type="flex" justify="space-between" align="top" gutter={24}>
            <Col span={17}>
              <Card
                title="发布新主题"
              >
                <Form>
                  <Form.Item>
                    <label htmlFor="">主题标题</label>
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item>
                    <label htmlFor="">正文</label>
                    <div className="article__upload">
                      <div className="article__upload-textarea">
                        <img className="article-topic__img"/>
                        <TextArea rows={4}  placeholder="输入状态" />
                        <Upload className="article__upload-image" {...props}>
                          <Icon type="picture" theme="filled" />
                          <span className="text-middle">添加图片</span>
                        </Upload>
                      </div>
                    </div>
                  </Form.Item>
                  <Form.Item>
                    <label htmlFor="">请选择一个分类：</label>
                    <div>
                      <Radio.Group onChange={this.onChange} value={null}>
                        <Radio style={radioStyle} value={1}>讨论<span>讨论-一般的牙齿相关的讨论或吐槽</span></Radio>
                        <Radio style={radioStyle} value={2}>询问<span>发布任何与牙齿相关的问题</span></Radio>
                        <Radio style={radioStyle} value={3}>我是牙医<span>邀请社区成员向你提问</span></Radio>
                        <Radio style={radioStyle} value={4}>牙套<span>正畸相关的话题，如牙套日记</span></Radio>
                        <Radio style={radioStyle} value={5}>智齿<span>智慧也是一种负担</span></Radio>
                        <Radio style={radioStyle} value={6}>种植<span>种植牙相关话题</span></Radio>
                      </Radio.Group>
                    </div>
                  </Form.Item>
                  <Button type="primary">发布</Button>
                </Form>
              </Card>
            </Col>
            <Col span={7}>
              {/* <SideList/> */}
            </Col>
          </Row>
        </div>
      </LayoutContainer>
    );
  }
}

NewArticle.propTypes = {
  article: PropTypes.Object
};

export default connect(({articles}) => {
  return {
    article: articles.article
  };
}, {
  createArticle
})(NewArticle);