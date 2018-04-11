import EventsModel from '../models/Events';
import { EVENTS_READ, EVENTS_FETCHING, EVENTS_ERROR } from '../actions/Events';

const model = { ...EventsModel };

export default function (state = model, action) {
  const { type } = action;
  switch (type) {
    case EVENTS_FETCHING: {
      return { ...state, isFetching: true, error: null, fetched: false };
    }

    case EVENTS_ERROR: {
      const { error } = action;
      console.error(`EventsReducer([ ${type} ])`, null, { state, action });
      return {
        ...state,
        isFetching: false,
        fetched: false,
        error
      };
    }

    case EVENTS_READ: {
      const { data } = action;
      return {
        ...state,
        isFetching: false,
        fetched: true,
        data: [...data],
      };
    }

    
    default: return { ...state };
  };
}
