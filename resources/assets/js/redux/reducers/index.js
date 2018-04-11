import { combineReducers } from 'redux';

import Events from './dispatchers/Events';

const Reducer = combineReducers({
  Events,
});

export default Reducer;
