import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link className="navbar-link" to="/allshippers">
          All Shipping Assets
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/shippingships">
          Shipping Ships
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/haulingships">
          Hauling Ships
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/docks">
          Docks
        </Link>
      </li>
    </ul>
  );
};
