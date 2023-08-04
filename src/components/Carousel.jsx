import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import data from "../data/data.json";
import "../style/Carousel.css";

function CarouselImage() {
  return (
    <div className="carousel-container">
      <Carousel className="carousel" infiniteLoop autoPlay>
        {data?.map((car) => {
          return (
            <img src={car.image} className="image-inside-carousel" alt="" />
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselImage;
