import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../redux/store';
import Application from './Application';

export default class App extends Component {
    render() {
        return (
          <Provider store={store}>
            <Application />
          </Provider>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
