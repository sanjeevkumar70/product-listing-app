import { FaBars, FaShoppingCart, FaUser, FaGlobe } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-menu">
        <FaBars />
      </div>

      <div className="header-search">
        <input
          type="text"
          placeholder="Search products..."
        />
      </div>

      <div className="header-icons">
        <FaShoppingCart />
        <FaGlobe />
        <FaUser />
      </div>
    </header>
  );
}
