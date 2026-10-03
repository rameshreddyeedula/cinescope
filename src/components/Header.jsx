import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">🎬</span>
          <span>CineScope</span>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>

          <Link to="/favorites">
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;