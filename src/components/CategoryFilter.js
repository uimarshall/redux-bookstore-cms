import React, { Component } from 'react';
// import PropTypes from 'prop-types'

const categories = [
  'All',
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

  render() {
    const allFilterCat = ['All', ...categories];
    const { filter } = this.state;

    return (
      <div>
        <select name="filter" value={filter}>
          {allFilterCat.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>

      </div>
    );
  }
}

export default CategoryFilter;
