import { render, screen } from '@testing-library/react';
import BooksForm from './containers/BooksForm';

test('renders learn react link', () => {
  render(<BooksForm />);
  const linkElement = screen.getByText(/Submit/i);
  expect(linkElement).toBeInTheDocument();
});
