import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => (
  <>
    <tr key={book.id}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button type="submit" onClick={removeBook}>
          Remove Book
        </button>
      </td>
    </tr>

  </>
);

Book.propTypes = {

  book: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.instanceOf(Function).isRequired,
};

export default Book;
