import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <section className="page-block confirmed-booking" aria-labelledby="confirmed-title">
      <h1 id="confirmed-title">Booking Confirmed!</h1>
      <p>
        Thank you — your table has been reserved at Little Lemon. We look
        forward to welcoming you!
      </p>
      <Link to="/reservations" className="btn-primary">Make another reservation</Link>
    </section>
  );
}

export default ConfirmedBooking;
