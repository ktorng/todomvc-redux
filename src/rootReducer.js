import { combineReducers } from 'redux';
import TodoReducer from './todos/reducer';

const rootReducer = combineReducers({
  todos: TodoReducer
})

export default rootReducer;
