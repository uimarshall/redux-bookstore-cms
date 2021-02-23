import { render, screen } from '@testing-library/react';
import BooksList from './containers/BooksList';

test('renders learn react link', () => {
  render(<BooksList />);
  const linkElement = screen.getByText(/Title/i);
  expect(linkElement).toBeInTheDocument();
});
