import React, { Component } from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: categories[0],
    };
  }

  render() {
    return (
      <div>

        <form>
          <input name="title" type="text" />
          <select name="category">
            {categories && categories.map(category => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default BooksForm;
