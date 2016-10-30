import * as t from './actionTypes';

export const toggleComplete = (itemId) => ({
  type: t.TOGGLE_COMPLETE,
  itemId
});

export const changeFilter = (filter) => ({
  type: t.CHANGE_FILTER,
  filter
});

export const clearCompleted = () => ({
  type: t.CLEAR_COMPLETED
});
