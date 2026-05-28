import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta-copy">
        <p className="eyebrow">Little Lemon</p>
        <h1 id="cta-title">Reserve A Table In Chicago</h1>
        <p>
          Enjoy Mediterranean flavors, seasonal dishes, and a cozy dining
          experience in the heart of the neighborhood.
        </p>
        <Link className="cta-button" to="/reservations">
          Reserve A Table
        </Link>
      </div>
      <img
        className="cta-image"
        src="/images/5a56cb0a6cea7dd9e4260ae87b268bd3eee8527d.jpg"
        alt="Fresh bruschetta served at Little Lemon"
      />
    </section>
  );
}

export default CallToAction;
