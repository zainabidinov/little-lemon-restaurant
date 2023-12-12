import React, { useState } from "react";
import logoImg from "../assets/Logo.svg";
import "./Header.css";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header name="/" className="header">
      <div className="header__container">
        <img src={logoImg} alt="Logo" />

        <nav>
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="specials" smooth={true} duration={500} className="nav__link">
                Specials
              </Link>
            </li>
            <li className="nav__item">
              <Link to="about" smooth={true} duration={500} className="nav__link">
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/booking-page" className="nav__link">
                Reservations
              </Link>
            </li>
          </ul>
          {!isMenuOpen && (
            <IconContext.Provider value={{ className: "nav__mobile-burger" }}>
              <GiHamburgerMenu onClick={handleMobileMenu} />
            </IconContext.Provider>
          )}

          {isMenuOpen ? (
            <div className="nav__mobile">
              <div className="nav__mobile-closeIcon">
                <IoClose onClick={handleMobileMenu} />
              </div>

              <ul className="nav__mobile-list">
                <li className="nav__item">
                  <Link to="/" className="nav__link-mobile">
                    Home
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="specials" smooth={true} duration={500} className="nav__link-mobile" onClick={handleMobileMenu}>
                    Specials
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="about" smooth={true} duration={500} className="nav__link-mobile" onClick={handleMobileMenu}>
                    About
                  </Link>
                </li>
                <li className="nav__item">
                  <Link href="/booking-page" className="nav__link-mobile">
                    Reservations
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="nav__mobile-closed"></div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
