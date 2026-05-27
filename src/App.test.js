import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /homepage/i });
  expect(headingElement).toBeInTheDocument();
});
