import Http from '../../../services/Http';
import { API, HTTP_STATUS_CODES } from '../../../constants';

export const EVENTS_READ = 'EVENTS_READ';
export const EVENTS_CREATE = 'EVENTS_CREATE';
export const EVENTS_FETCHING = 'EVENTS_FETCHING';
export const EVENTS_ERROR = 'EVENTS_ERROR';

export function readEvents(query = {}) {
  return function(dispatch) {
    dispatch({ type: EVENTS_FETCHING });

    const onError = (response) => {
      console.error('readEvents()', 'onError([ response ])', response);
      dispatch({ type: EVENTS_ERROR, response });
    };
    const onSuccess = (response) => {
      const { status, data } = response;
      if (status === HTTP_STATUS_CODES.OK) {
        dispatch({ type: EVENTS_READ, data });
      } else {
        onError({ message: 'Error: Incorrect http status code or dataset is empty' });
      }
    };

    Http.get(API.EVENTS, query).then(onSuccess).catch(onError);
  }
}

export function createEvent(data, callback) {
  const onSuccess = (response) => {
    const { status } = response;
    if (status === HTTP_STATUS_CODES.CREATED) {
      callback(null, response.data);
    } else {
      callback(new Error('Unknown error on createEvent'));
    }
  };
  const onError = (error) => {
    console.error('createEvent()', 'onError([ response ])', error);
    callback(error);
  };
  Http.post(API.EVENTS, data).then(onSuccess).catch(onError);
}
