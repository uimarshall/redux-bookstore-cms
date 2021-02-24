import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const books = book.id && book.title && book.category ? (

    <div className="book" key={book.id}>
      <div id="left">
        <h5 className="category">{book.category}</h5>
        <h2 className="title">{book.title}</h2>
        <h4 className="author">Marshall Akpan</h4>
        <div className="actions">
          <button type="button" disabled>Comments</button>
          <button type="button" onClick={removeBook}>
            Remove Book
          </button>
          <button type="button" disabled>Edit</button>
        </div>
      </div>
      <div id="center">
        <div className="pie-graph" />
        <div className="percent">
          <h1 className="percentage">64%</h1>
          <h4 className="completed">Completed</h4>
        </div>
      </div>
      <div id="right">
        <div className="current all-caps">Current Chapter</div>
        <div className="chapter">Chapter 11</div>
        <button type="button">Update Progress</button>
      </div>
    </div>

  ) : (
    null
  );

  return (
    <>
      {books}

    </>
  );
};

Book.propTypes = {

  book: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.instanceOf(Function).isRequired,
};

export default Book;
