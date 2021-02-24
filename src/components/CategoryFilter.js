import React, { Component } from 'react';
import PropTypes from 'prop-types';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];
class CategoryFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
    };
  }

  handleChange = e => {
    const { changeFilter } = this.props;
    changeFilter(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const allFilterCat = ['All', ...categories];
    const { filter } = this.state;

    return (
      <div>
        <select name="filter" value={filter} onChange={this.handleChange}>
          {allFilterCat.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>

      </div>
    );
  }
}

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
