
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ShopEasy
      </Link>

      <div className="nav-links">
        <Link to="/">Products</Link>
        <Link to="/cart">Cart 🛒 ({cartCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;

