const specials = [
  {
    id: 'greek-salad',
    title: 'Greek Salad',
    price: '$12.99',
    description:
      'Crisp lettuce, peppers, olives and feta with our house lemon dressing.',
    image: '/images/9beeddcd9d22dc711cd9fddc4a3393a7278299c7.jpg',
  },
  {
    id: 'bruschetta',
    title: 'Bruschetta',
    price: '$8.50',
    description:
      'Toasted artisan bread topped with marinated tomatoes and herbs.',
    image: '/images/957db75e6b654e07f65da12b96dc858c5995ed28.jpg',
  },
  {
    id: 'pasta',
    title: 'Penne Arrabbiata',
    price: '$14.25',
    description:
      'Classic penne in a spicy tomato sauce finished with fresh basil.',
    image: '/images/d4ac7f08664b3ab85e379c0cfcfb44c74aa0a76e.jpg',
  },
];

function Specials() {
  return (
    <section className="specials" id="menu" aria-labelledby="specials-title">
      <div className="section-head">
        <h2 id="specials-title">This Week Specials</h2>
      </div>
      <div className="specials-grid">
        {specials.map((item) => (
          <article className="special-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="special-card-body">
              <div className="special-card-row">
                <h3>{item.title}</h3>
                <span>{item.price}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
