import { createActions } from 'redux-actions-magic';

const { types, actions } = createActions([
  'SET_CHARACTERS',
  'DELETE_CHARACTER',
  'SET_CHARACTER_LIKE',
  'SET_FILTER_LIKED',
  'CHANGE_NAME',
  'CHANGE_AGE',
  'SET_PAGE',
  'SET_PAGE_LIMIT',
  'TOGGLE_IS_FETCHING'
]);

export { types, actions };