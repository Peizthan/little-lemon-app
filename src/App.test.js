import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';

test('renders call to action heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', {
    name: /reserve a table in chicago/i,
  });
  expect(headingElement).toBeInTheDocument();
});

// --- BookingForm static text ---
test('renders BookingForm date label', () => {
  render(<BookingForm availableTimes={initializeTimes()} dispatch={() => {}} />);
  expect(screen.getByText('Choose date')).toBeInTheDocument();
});

test('renders BookingForm time label', () => {
  render(<BookingForm availableTimes={initializeTimes()} dispatch={() => {}} />);
  expect(screen.getByText('Choose time')).toBeInTheDocument();
});

test('renders BookingForm submit button', () => {
  render(<BookingForm availableTimes={initializeTimes()} dispatch={() => {}} />);
  expect(screen.getByDisplayValue('Make Your reservation')).toBeInTheDocument();
});

// --- initializeTimes reducer function ---
test('initializeTimes returns the default available times', () => {
  const times = initializeTimes();
  expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

// --- updateTimes reducer function ---
test('updateTimes returns the same state for an unknown action', () => {
  const state = initializeTimes();
  const result = updateTimes(state, { type: 'UNKNOWN' });
  expect(result).toEqual(state);
});

test('updateTimes returns the default times for UPDATE_TIMES action', () => {
  const state = ['17:00'];
  const result = updateTimes(state, { type: 'UPDATE_TIMES', date: '2026-06-01' });
  expect(result).toEqual(initializeTimes());
});
