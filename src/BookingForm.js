import { useState } from 'react';

const today = new Date().toISOString().split('T')[0];

function validateDate(value) {
  if (!value) return 'Please choose a date.';
  if (value < today) return 'Date cannot be in the past.';
  return '';
}

function validateGuests(value) {
  if (!value || value < 1) return 'At least 1 guest is required.';
  if (value > 10) return 'Maximum 10 guests allowed.';
  return '';
}

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const [dateError, setDateError] = useState('');
  const [guestsError, setGuestsError] = useState('');

  const isFormValid =
    validateDate(date) === '' && validateGuests(guests) === '';

  function handleDateChange(e) {
    const val = e.target.value;
    setDate(val);
    setDateError(validateDate(val));
    dispatch({ type: 'UPDATE_TIMES', date: val });
  }

  function handleGuestsChange(e) {
    const val = Number(e.target.value);
    setGuests(val);
    setGuestsError(validateGuests(val));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const dErr = validateDate(date);
    const gErr = validateGuests(guests);
    setDateError(dErr);
    setGuestsError(gErr);
    if (dErr || gErr) return;
    submitForm({ date, time, guests, occasion });
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        min={today}
        onChange={handleDateChange}
        aria-describedby={dateError ? 'res-date-error' : undefined}
        aria-invalid={dateError ? 'true' : 'false'}
        required
      />
      {dateError && (
        <span id="res-date-error" className="field-error" role="alert">
          {dateError}
        </span>
      )}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        placeholder="1"
        min="1"
        max="10"
        value={guests}
        onChange={handleGuestsChange}
        aria-describedby={guestsError ? 'guests-error' : undefined}
        aria-invalid={guestsError ? 'true' : 'false'}
        required
      />
      {guestsError && (
        <span id="guests-error" className="field-error" role="alert">
          {guestsError}
        </span>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!isFormValid}
        aria-disabled={!isFormValid}
      />
    </form>
  );
}

export default BookingForm;
