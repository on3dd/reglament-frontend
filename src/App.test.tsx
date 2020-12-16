import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  const { container } = render(<App />);

  const header = container.querySelector('header');
  expect(header).toBeInTheDocument();
});

test('renders main', () => {
  const { container } = render(<App />);

  const header = container.querySelector('main');
  expect(header).toBeInTheDocument();
});

test('renders footer', () => {
  const { container } = render(<App />);

  const header = container.querySelector('footer');
  expect(header).toBeInTheDocument();
});
