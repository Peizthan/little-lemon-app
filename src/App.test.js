import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';

const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const futureDate = '2099-12-31';

beforeEach(() => {
  window.fetchAPI = jest.fn(() => mockTimes);
});

test('renders call to action heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', {
    name: /reserve a table in chicago/i,
  });
  expect(headingElement).toBeInTheDocument();
});

// --- BookingForm static text ---
test('renders BookingForm date label', () => {
  render(<BookingForm availableTimes={mockTimes} dispatch={() => {}} submitForm={() => {}} />);
  expect(screen.getByText('Choose date')).toBeInTheDocument();
});

test('renders BookingForm time label', () => {
  render(<BookingForm availableTimes={mockTimes} dispatch={() => {}} submitForm={() => {}} />);
  expect(screen.getByText('Choose time')).toBeInTheDocument();
});

test('renders BookingForm submit button', () => {
  render(<BookingForm availableTimes={mockTimes} dispatch={() => {}} submitForm={() => {}} />);
  expect(screen.getByDisplayValue('Make Your reservation')).toBeInTheDocument();
});

// --- BookingForm validation ---
test('submit button is disabled when date is empty', () => {
  render(<BookingForm availableTimes={mockTimes} dispatch={() => {}} submitForm={() => {}} />);
  expect(screen.getByDisplayValue('Make Your reservation')).toBeDisabled();
});

test('submit button is enabled when date is valid', async () => {
  render(<BookingForm availableTimes={mockTimes} dispatch={() => {}} submitForm={() => {}} />);
  const dateInput = screen.getByLabelText('Choose date');
  await userEvent.type(dateInput, futureDate);
  expect(screen.getByDisplayValue('Make Your reservation')).not.toBeDisabled();
});

test('shows error message when past date is entered', async () => {
  render(<BookingForm availableTimes={mockTimes} dispatch={() => {}} submitForm={() => {}} />);
  const dateInput = screen.getByLabelText('Choose date');
  await userEvent.type(dateInput, '2000-01-01');
  expect(screen.getByRole('alert')).toBeInTheDocument();
});

// --- initializeTimes reducer function ---
test('initializeTimes calls fetchAPI with today and returns available times', () => {
  const times = initializeTimes();
  expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  expect(times).toEqual(mockTimes);
});

// --- updateTimes reducer function ---
test('updateTimes returns the same state for an unknown action', () => {
  const state = initializeTimes();
  const result = updateTimes(state, { type: 'UNKNOWN' });
  expect(result).toEqual(state);
});

test('updateTimes calls fetchAPI with the dispatched date for UPDATE_TIMES', () => {
  const result = updateTimes([], { type: 'UPDATE_TIMES', date: '2026-06-01' });
  expect(window.fetchAPI).toHaveBeenCalledWith(new Date('2026-06-01'));
  expect(result).toEqual(mockTimes);
});
