import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: categories[0],
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const book = {
      ...this.state, id: Math.floor(Math.random() * 1000),
    };

    const { createBook } = this.props;

    createBook(book);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      id: '',
      title: '',
      category: '',
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="bg-grey round-bottom box-shadow">
        <div className="center max-width-90 border-top">
          <div className="form-title">Add New Book</div>
          <form onSubmit={this.handleSubmit} className="book-form">
            <input name="title" type="text" value={title} onChange={this.handleChange} placeholder="Book Title" />
            <select name="category" value={category} onChange={this.handleChange}>
              <option value="" disabled selected>Category</option>
              {categories && categories.map(category => (
                <option key={category}>{category}</option>
              ))}
            </select>
            <button type="submit">Add Book</button>
          </form>
        </div>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.instanceOf(Function).isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
