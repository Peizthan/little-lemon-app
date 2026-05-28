import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <section
      className="page-block confirmed-booking"
      aria-labelledby="confirmed-title"
      aria-live="polite"
      role="status"
    >
      <h1 id="confirmed-title">Booking Confirmed!</h1>
      <p>
        Thank you — your table has been reserved at Little Lemon. We look
        forward to welcoming you!
      </p>
      <Link
        to="/reservations"
        className="btn-primary"
        aria-label="On Click - Make another reservation at Little Lemon"
      >
        Make another reservation
      </Link>
    </section>
  );
}

export default ConfirmedBooking;
