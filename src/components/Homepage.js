import React from "react";
import "./Homepage.css";
import Header from "./Header";
import Footer from "./Footer"
import resFoodImg from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

function Homepage() {
  
  return (
    <React.Fragment>
      <Header />
      <main>
        <div className="main-wrapper">
          <div className="section-one">
            <div className="item">
              <span className="main-title">
                <span>Little Lemon</span>
                <br />
              </span>
            </div>
            <div className="item">
              <span className="heading">
                <span>Chicago</span>
                <br />
              </span>
            </div>
            <div className="item">
              <span className="subtitle">
                <br />
                <span>We are a family owned</span>
                <br />
                <span>Mediterranean restaurant,</span>
                <br />
                <span>focused on traditional</span>
                <br />
                <span>recipes served with a modern</span>
                <br />
                <span>twist.</span>
              </span>
            </div>
            <div className="item">
              <Link to="/booking-page">
                <button className="reserve_table_btn">Reserve a table</button>
              </Link>
            </div>
            <div className="item">
              <img
                className="pic-food"
                src={resFoodImg}
                alt="restaurant food"
              />
            </div>
          </div>
        </div>

        <div className="second-wrapper">
          <div className="section-two">
            <div className="item">
              <span className="specials-heading">This weeks specials!</span>
              <br />
            </div>
            <div className="item">
              <button className="online_menu_btn">Online Menu</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Homepage;
