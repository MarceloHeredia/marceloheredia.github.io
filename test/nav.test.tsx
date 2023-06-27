import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from '../src/nav';

test('renders learn react link', () => {
  render(<Nav />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
