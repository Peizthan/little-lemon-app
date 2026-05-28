import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <p>Little Lemon</p>
      <nav aria-label="Footer links">
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/menu">Menu</Link></li>
        </ul>
      </nav>
      <p>Copyright 2026</p>
    </footer>
  );
}

export default Footer;
