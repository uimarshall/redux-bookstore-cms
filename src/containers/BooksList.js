import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
        </tr>
        <tr>
          <th>Title</th>
        </tr>
        <tr>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <Book book={book} key={book.id} />
        ))}
      </tbody>
    </table>

  </div>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,

};

const mapStateToProps = state => ({
  books: state.book,
});

export default connect(mapStateToProps)(BooksList);
