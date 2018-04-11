import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { readEvents, createEvent } from '../../redux/reducers/actions/Events.js';
import AppComponent from '../../components/AppComponent';

class Application extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.readEvents();
  }
  handleSubmit(error, data) {
    if(!error) {
      this.props.readEvents();
    }
  }
  onSubmit(notification) {
    createEvent(notification, this.handleSubmit);
  }
  render () {
    return (
      <AppComponent
        {...this.props}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = function(store) {
  return {
    EventsStore: store.Events,
  };
};
const mapDispatchToProps = function (dispatch) {
  return {
    readEvents: bindActionCreators(readEvents, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
