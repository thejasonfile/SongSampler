import { combineReducers } from 'redux';
import songReducer from './song_reducer';
import termReducer from './term_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  songs: songReducer,
  term: termReducer,
  user: userReducer
});

export default rootReducer;
