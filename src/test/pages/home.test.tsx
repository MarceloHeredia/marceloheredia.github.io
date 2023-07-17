import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/home';

describe('Home Page tests', () => {
  it('should render', async () => {
    render(<Home />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
