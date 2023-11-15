import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/about" className="nav__link">
            About
          </Link>
        </li>
        <li className="nav__item">
          <a href="/menu" className="nav__link">
            Menu
          </a>
        </li>
        <li className="nav__item">
          <a href="/booking-page" className="nav__link">
            Reservations
          </a>
        </li>
        <li className="nav__item">
          <a href="/order-online" className="nav__link">
            Order Online
          </a>
        </li>
        <li className="nav__item">
          <a href="/login" className="nav__link">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
