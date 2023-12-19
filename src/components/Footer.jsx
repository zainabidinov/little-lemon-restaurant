import React from "react";
import "./Footer.css";
import lemonLogo from "../assets/footer-logo.png";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src={lemonLogo} alt="" />

        <nav className="footer__nav">
          <div>
            <h1>Address</h1>
            <p>
              456 Elm Avenue,
              <br /> Chicago, IL 60602
            </p>
          </div>
          <div className="footer__nav-details">
            <h1>Details</h1>
            <p>
              <Link to="/" smooth={true} duration={500}>
                Home
              </Link>
            </p>
            <p>
              <Link to="specials" smooth={true} duration={500}>
                Specials
              </Link>
            </p>
            <p>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </p>
            <p>
              <RouterLink to="/booking" smooth={true} duration={500}>
                Reservations
              </RouterLink>
            </p>
          </div>
          <div>
            <h1>Contact</h1>
            <p>(123)-243-657</p>
            <p>info@littlelemon.com</p>
          </div>
        </nav>
      </div>
      <div className="footer__copyright">
        © Copyright 2023 Little Lemon. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
