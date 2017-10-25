import { combineReducers } from 'redux';
import songReducer from './song_reducer';
import termReducer from './term_reducer';

const rootReducer = combineReducers({
  songs: songReducer,
  term: termReducer
});

export default rootReducer;
