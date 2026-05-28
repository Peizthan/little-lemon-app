import { render, screen } from '@testing-library/react';
import App from './App';

test('renders call to action heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', {
    name: /reserve a table in chicago/i,
  });
  expect(headingElement).toBeInTheDocument();
});
