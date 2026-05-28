import BookingForm from './BookingForm';

function BookingPage() {
  return (
    <section className="page-block" aria-labelledby="booking-title" id="reservations">
      <h1 id="booking-title">Reserve A Table</h1>
      <p>Fill in the details below and we'll confirm your booking right away.</p>
      <BookingForm />
    </section>
  );
}

export default BookingPage;
