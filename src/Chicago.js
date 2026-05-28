function Chicago() {
  return (
    <section className="chicago" id="about" aria-labelledby="chicago-title">
      <article className="chicago-copy">
        <h2 id="chicago-title">Little Lemon Chicago</h2>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant focused on
          quality ingredients and local hospitality.
        </p>
        <p>
          Our chefs blend traditional recipes with modern touches to create a
          memorable dining experience.
        </p>
      </article>
      <div className="chicago-images">
        <img
          src="/images/871655af5e4849aa43a6d293284825002e7aeb50.jpg"
          alt="Chef serving appetizers"
        />
        <img
          src="/images/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg"
          alt="Grilled fish specialty"
        />
      </div>
    </section>
  );
}

export default Chicago;
