import { Map } from 'immutable';
import * as t from './actionTypes';


export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case t.TOGGLE_COMPLETE:
      return toggleComplete(state, action.itemId);
    case t.CHANGE_FILTER:
      return changeFilter(state, action.filter);
    case t.CLEAR_COMPLETED:
      return clearCompleted(state);
    default:
      return state;
  }
}

function setState(state, newState) {
  return state.merge(newState);
}

function toggleComplete(state, itemId) {
  // find the index associated with itemId
  const itemIndex = state.get('todoList').findIndex(item =>
    item.get('id') === itemId
  );

  // update the todo at this index
  const updatedItem = state
    .get('todoList')
    .get(itemIndex)
    .update('status', status => status === 'active' ? 'completed' : 'active');

  // update state to account for modified todo
  return state.update('todoList', todoList => todoList.set(itemIndex, updatedItem));
}

function changeFilter(state, filter) {
  return state.set('filter', filter);
}

// filter out completed todos
function clearCompleted(state) {
  return state.update('todoList', todoList =>
    todoList.filterNot(item =>
      item.get('status') === 'completed'
    )
  );
}
