const reviews = [
  {
    id: 'emma',
    name: 'Emma R.',
    quote: 'Fresh food, warm staff, and the best atmosphere for dinner.',
    image: '/images/f64e8d485894f9df206830063adbc400d85de711.jpg',
  },
  {
    id: 'noah',
    name: 'Noah T.',
    quote: 'The specials change often and every plate feels chef-crafted.',
    image: '/images/96de1a8e84d5b60e17f4e8a752e3825e17a622bf.jpg',
  },
  {
    id: 'sophia',
    name: 'Sophia L.',
    quote: 'Perfect spot for date night. Reservation process was effortless.',
    image: '/images/49a4f4fdcc436f25940a66afb4ae5e3f73861bdf.jpg',
  },
];

function CustomersSay() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title">What Customers Say</h2>
      <div className="testimonials-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.id}>
            <p className="review-stars" aria-label="Rating: 5 out of 5">
              ★★★★★
            </p>
            <div className="review-person">
              <img src={review.image} alt={review.name} />
              <h3>{review.name}</h3>
            </div>
            <p>{review.quote}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
