/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import Header from '../components/Header';

const BooksList = ({
  books, removeBook, changeFilter, filter,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  let filteredBookCat;
  filter === 'All' ? (filteredBookCat = books) : (filteredBookCat = books.filter(book => book.category === filter));

  return (
    <div>
      <Header>
        <CategoryFilter changeFilter={handleFilterChange} />

      </Header>
      <main className="bg-grey">
        <div className="center max-width-90 book-section">
          {filteredBookCat && filteredBookCat.map(book => (
            <Book book={book} key={book.id} removeBook={() => handleRemoveBook(book)} />
          ))}
        </div>
      </main>

    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
