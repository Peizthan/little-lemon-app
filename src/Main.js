import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

export function initializeTimes() {
  return window.fetchAPI(new Date());
}

export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return window.fetchAPI(new Date(action.date));
    default:
      return state;
  }
}

function PageBlock({ id, title, text }) {
  return (
    <section className="page-block" aria-labelledby={`${id}-title`}>
      <h1 id={`${id}-title`}>{title}</h1>
      <p>{text}</p>
    </section>
  );
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);

  return (
    <main className="site-main">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/about"
          element={
            <PageBlock
              id="about"
              title="About"
              text="Learn the Little Lemon story and our Chicago roots."
            />
          }
        />
        <Route
          path="/menu"
          element={
            <PageBlock
              id="menu"
              title="Menu"
              text="Browse our Mediterranean menu and seasonal chef specials."
            />
          }
        />
        <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route
          path="/order-online"
          element={
            <PageBlock
              id="order-online"
              title="Order Online"
              text="Order your favorites for pickup and enjoy Little Lemon at home."
            />
          }
        />
        <Route
          path="/login"
          element={
            <PageBlock
              id="login"
              title="Login"
              text="Sign in to manage your reservations and orders."
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
