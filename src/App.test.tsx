import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the user list', () => {
  render(<App />);
  const usersTitle = screen.getByText(/Users/);

  expect(usersTitle).toBeInTheDocument();
});

test('renders the user details', () => {
  render(<App />);
  const detailsTitle = screen.getByText(/Details/);

  expect(detailsTitle).toBeInTheDocument();
});
