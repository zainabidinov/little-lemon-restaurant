import React from "react";
import "./Specials.css";
import greekSalad from "../assets/greek-salad.jpg";
import brucheta from "../assets/bruchetta.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";

export const Specials = () => {
  return (
    <div className="specials">
      <div className="specials__container">
        <h1 className="specials__heading">This Weeks Specials!</h1>
        <div className="specials__menu">
          <div className="specials__menu-item">
            <img className="specials__menu-item-pic" src={greekSalad} alt="" />
            <div className="specials__menu-item-heading">
              <p>Greek Salad</p>
              <p>$ 12.99</p>
            </div>
            <div className="specials__menu-item-desc">
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
            </div>
          </div>

          <div className="specials__menu-item">
            <img className="specials__menu-item-pic" src={brucheta} alt="" />
            <div className="specials__menu-item-heading">
              <p>Bruchetta</p>
              <p>$ 5.99</p>
            </div>
            <div className="specials__menu-item-desc">
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
            </div>
          </div>
          <div className="specials__menu-item">
            <img
              className="specials__menu-item-pic"
              src={lemonDessert}
              alt=""
            />
            <div className="specials__menu-item-heading">
              <p>Lemon Dessert</p>
              <p>$ 5.00</p>
            </div>
            <div className="specials__menu-item-desc">
              <p>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
