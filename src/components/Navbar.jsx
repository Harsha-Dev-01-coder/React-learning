import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <header>
      <Link to="/">
        <h2>React Learning</h2>
      </Link>

      <p>Cart: {cartCount}</p>
    </header>
  );
}

export default Navbar;