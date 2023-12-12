import React from "react";
import "./About.css";
import about from "../assets/about.jpg";

export const About = () => {
  return (
    <div name="about" className="about">
      <div className="about__container">
        <div className="about__desc">
          <h1>About Us</h1>
          <p>
            Little Lemon, a popular Mediterranean restaurant in Chicago, was
            founded in 1995 by two Italian brothers, Adrian and Mario. The
            brothers aimed to bring authentic Mediterranean flavors and recipes
            from their hometown in Italy to the city, filling a gap in the local
            dining scene.
          </p>
          <p>
            Nearly 30 years later, Little Lemon continues to serve delicious and
            authentic dishes, with Adrian and Mario still at the helm. The
            restaurant is known for its warm atmosphere, friendly staff, and
            mouth-watering menu. A visit to Little Lemon promises a memorable
            culinary experience.
          </p>
        </div>
        <img src={about} alt="" />
      </div>
    </div>
  );
};
