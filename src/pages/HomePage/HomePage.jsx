import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import foods from "./foods";
import "./HomePage.scss";
const ab = require("../../assets/samosa.png");
const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar />
      <div className="homepage-div">
        <div>
          <Carousel
            className="carousel"
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
          >
            {foods.map((food) => {
              return (
                <img
                  className="food-img"
                  key={food.name}
                  src={food.source}
                  alt="food"
                />
              );
            })}
          </Carousel>
        </div>
        <div className="right-div">
          <p>
            Satify your Hunger with <p className="delicious-p"> Delicious & Affordable </p>Food
          </p>
          <button className="explore-btn">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
