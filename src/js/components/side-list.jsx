import {List} from 'antd';
import React, {Component} from 'react';

class SideList extends Component {
  componentWillMount() {}

  componentWillReceiveProps() {}

  render() {
    const data2 = [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.'
    ];

    return (
      <List
        className="side-list"
        split={false}
        header={<div><h2 className="side-list__title">Community Guidelines</h2></div>}
        dataSource={data2}
        renderItem={item => (
          <List.Item>
            <h4 className="side-list__item-title">Aenean euismod</h4>
            <p className="side-list__item-detail">{item}</p>
          </List.Item>
        )}
      />
    );
  }
}

SideList.propTypes = {};

export default SideList;