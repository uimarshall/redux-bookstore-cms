import { render, screen } from '@testing-library/react';
import BooksList from './containers/BooksList';

test('renders learn react link', () => {
  render(<BooksList />);
  const linkElement = screen.getByText(/booklists/i);
  expect(linkElement).toBeInTheDocument();
});
