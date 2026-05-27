import littleLemonLogo from './assets/little-lemon-logo.svg';

function Header() {
  return (
    <header className="site-header">
      <img className="site-logo" src={littleLemonLogo} alt="Little Lemon logo" />
    </header>
  );
}

export default Header;
