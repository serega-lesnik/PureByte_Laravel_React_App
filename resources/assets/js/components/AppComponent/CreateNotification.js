import React, { Component } from 'react';

export default class CreateNotification extends Component {
constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      notification: null,
    }
    this.inputData = null;
  }

  onChange(e) {
    this.setState({
      notification: e.target.value,
    });
  }

  onClick(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.inputData.value = "";
  }

  render() {
    return (
      <div>
        <h1>Create Notification</h1>
        <input onChange={this.onChange} ref={el => this.inputData = el} />
        <button onClick={this.onClick}>Submit</button>
      </div>
    );
  }
}

CreateNotification.defaultProps = {
  onSubmit: () => {},
};
