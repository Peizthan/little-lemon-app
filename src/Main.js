function Main() {
  return (
    <main className="site-main" id="home">
      <section className="hero" id="reservations">
        <img
          className="hero-image"
          src="/images/5a56cb0a6cea7dd9e4260ae87b268bd3eee8527d.jpg"
          alt="Bruschetta appetizer"
        />
        <h1>Homepage</h1>
        <p>Reserve a table at Little Lemon.</p>
      </section>

      <section className="content-grid" aria-label="Highlights">
        <article className="panel" id="about">
          <img
            className="panel-image"
            src="/images/9beeddcd9d22dc711cd9fddc4a3393a7278299c7.jpg"
            alt="Fresh Greek salad"
          />
          <h2>About Little Lemon</h2>
          <p>
            Family-owned Mediterranean restaurant serving fresh, seasonal
            flavors.
          </p>
        </article>
        <article className="panel" id="menu">
          <img
            className="panel-image"
            src="/images/d4ac7f08664b3ab85e379c0cfcfb44c74aa0a76e.jpg"
            alt="Penne pasta dish"
          />
          <h2>Popular Menu</h2>
          <p>Explore chef specials, classic favorites, and signature desserts.</p>
        </article>
      </section>
    </main>
  );
}

export default Main;
