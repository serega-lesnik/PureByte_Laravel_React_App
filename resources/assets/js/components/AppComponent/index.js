import React, { Component } from 'react';
import ViewNotifications from './ViewNotifications';
import CreateNotification from './CreateNotification';

export default class AppComponent extends Component {

  render() {
    
    return (
      <div>
        <ViewNotifications data={this.props.EventsStore.data} />
        <CreateNotification
          onSubmit={this.props.onSubmit}
        />
      </div>
    );
  }
}
