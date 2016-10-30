import * as t from './actionTypes';

export const toggleComplete = (itemId) => ({
  type: t.TOGGLE_COMPLETE,
  itemId
});
