import React from "react";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import foodHero from "../assets/food-hero.jpg";
import { Link } from "react-router-dom";
import { Specials } from "./Specials";
import { Testimonials } from "./Testimonials";
import { About } from "./About";

function Homepage() {
  return (
    <React.Fragment>
      <Header />
      <div className="home">
        <div className="home__container">
          <div className="home__intro">
            <span className="home-title">
              Little Lemon
              <br />
            </span>
            <span className="subtitle">Chicago</span>

            <p>
              We are a family owned
              <br />
              Mediterranean restaurant,
              <br />
              focused on traditional
              <br />
              recipes served with a modern
              <br />
              twist.
            </p>

            <div>
              <Link to="/booking">
                <button className="reserve_table_btn">Reserve a Table</button>
              </Link>
            </div>
          </div>
          <div>
            <img className="foodHero" src={foodHero} alt="restaurant food" />
          </div>
        </div>
        <Specials />
        <Testimonials />
        <About />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Homepage;
