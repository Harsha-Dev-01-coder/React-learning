import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}

      <NavLink to="/products">Products</NavLink>
      {" | "}

      <NavLink to="/dashboard">Dashboard</NavLink>
    </nav>
  );
}

export default Navbar;