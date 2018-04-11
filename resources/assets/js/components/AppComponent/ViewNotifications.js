import React, { Component } from 'react';

export default class ViewNotifications extends Component {

  render() {
    const { data } = this.props;
    let i = 0;
    return ([
        <h1 key={i++}>Existing Notifications:</h1>,
        <ul key={i++}>{data.map(item =>
          <li key={item.id}>
            {item.notification}
          </li>
        )}</ul>,
    ]);
  }
}

ViewNotifications.defaultProps = {
  data: [],
};
