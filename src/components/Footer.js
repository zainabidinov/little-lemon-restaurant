import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <nav>
        <div className="sec doormat">
          <ul>
            <h3>Doormat Navigation</h3>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order-online">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>

        <div className="sec contact">
          <ul>
            <h3>Contact</h3>
            <li>
              <a href="/addres">Address</a>
            </li>
            <li>
              <a href="/phone-number">Phone Number</a>
            </li>
            <li>
              <a href="/email">email</a>
            </li>
          </ul>
        </div>

        <div className="sec socials">
          <ul>
            <h3>Social Media Links</h3>
            <li>
              <a href="/addres">Address</a>
            </li>
            <li>
              <a href="/phone-number">Phone Number</a>
            </li>
            <li>
              <a href="/email">email</a>
            </li>
          </ul>
        </div>
      </nav>
      
    </footer>
  );
}

export default Footer;
