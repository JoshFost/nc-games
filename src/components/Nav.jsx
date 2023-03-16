import { Link } from "react-router-dom";
import "../nav.css";
const Nav = () => {
  return (
    <nav className="navMenu">
      <Link to="/">Home</Link>
      <Link to="/reviews"> Reviews </Link>
      <Link to="/categories"> Categories</Link>
    </nav>
  );
};

export default Nav;
