import React from "react";
import logoImg from "../assets/Logo.svg";
import Nav from "./Nav";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <div className="logo-container">
          <img src={logoImg} alt="Website Logo" />
        </div>
        
        <div className="nav-container">
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
