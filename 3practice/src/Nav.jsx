import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">MySite</div>

        {/* Hamburger Menu Button */}
        <div className="menu-btn" onClick={toggleMenu}>
          ☰
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/admit">Admin</Link></li>
          <li><Link to="/dash">Dash</Link></li>
          <li><Link to="/super">Superdash</Link></li>
          <li><Link to="/practice">Practice</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
