import Axios from 'axios';
import QueryString from 'querystring';
import _ from 'lodash';

import { CONFIG } from '../constants';

function getHeaders() {
  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  };
  return options;
}

export default class Http {

  static get(url, data = {}) {
    const param = _.isEmpty(data) ? '' : `?${QueryString.encode(data)}`;
    const path = `${CONFIG.API_SERVICE_URL}/${CONFIG.API_PATH}/${url}${param}`;
    const headers = getHeaders();

    const watcher = new Promise((resolve, reject) => {
      const onSuccess = response => resolve(response);
      const onError = (response) => reject(response);

      Axios.get(path, headers).then(onSuccess).catch(onError);
    });
    return watcher;
  }

  static post(url, data = {}) {
    const path = `${CONFIG.API_SERVICE_URL}/${CONFIG.API_PATH}/${url}`;
    const headers = getHeaders();

    const watcher = new Promise((resolve, reject) => {
      const onSuccess = response => resolve(response);
      const onError = (response) => reject(response);

      Axios.post(path, data, headers).then(onSuccess).catch(onError);
    });

    return watcher;
  }

  static patch(url, data = {}) {}
  static remove(url, data = {}) {}
}
