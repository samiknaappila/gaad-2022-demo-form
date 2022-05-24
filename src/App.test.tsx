import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Accessibility demo text', () => {
  render(<App />);
  const titleElement = screen.getByText(/Accessibility demo/i);
  expect(titleElement).toBeInTheDocument();
});
