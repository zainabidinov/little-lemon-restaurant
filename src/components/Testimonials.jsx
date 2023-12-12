import React from "react";
import "./Testimonials.css";

export const Testimonials = () => {
  return (
    <div name="testimonials" className="testimonials">
      <div className="testimonials__heading">What our customers say</div>
      <div className="testimonials__container">
        <div className="testimonials__container-item">
          <p>"The service was fantastic, and the atmosphere was perfect."</p>
          <p>- Karen T.</p>
        </div>
        <div className="testimonials__container-item">
          <p>"The chef is a genius! Everything was cooked to perfection."</p>
          <p>- Peter J.</p>
        </div>
        <div className="testimonials__container-item">
          <p>
            "Wonderful, beautiful, and super tasty. Highly
            recommend Lemon Restaurant and will dine again!!"
          </p>
          <p>- Jasmin S.</p>
        </div>
      </div>
    </div>
  );
};
