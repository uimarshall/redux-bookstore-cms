import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <>
    <tr key={book.id}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>

  </>
);

Book.propTypes = {

  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
