import { CREATE_BOOK, REMOVE_BOOK } from './actionTypes';

const createBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: book,
});

export {
  createBook, removeBook,
};
