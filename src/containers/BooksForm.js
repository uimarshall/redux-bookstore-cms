import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <>
    <form>
      <input name="title" type="text" />
      <select name="category">
        {categories && categories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>

  </>
);

export default BooksForm;
