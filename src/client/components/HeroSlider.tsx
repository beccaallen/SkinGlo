import * as React from "react";
import Carousel from "react-bootstrap/Carousel";

const HeroSlider: React.FC<HeroSliderProps> = (props) => {
  return (
    <div className="row h-75 hero-slider">
      <div className="col-lg-6 d-flex h-75">
        <Carousel controls={false} indicators={false}>
          <Carousel.Item interval={3000}>
            <img
              id="carousel-item"
              className="d-block w-100 carousel-item"
              src="../photos/sam-limon-g5oq-wH71OQ-unsplash.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 carousel-item"
              src="../photos/enecta-cannabis-extracts-80wCkpt-IKE-unsplash.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 carousel-item"
              src="../photos/mathilde-langevin-p3O5f4u95Lo-unsplash.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="col-lg-6 d-flex ">
        <Carousel controls={false} indicators={false}>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 carousel-item"
              src="../photos/jocelyn-morales-JiqTLjzEH18-unsplash.jpg "
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 carousel-item"
              src="../photos/mathilde-langevin-p3O5f4u95Lo-unsplash.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 carousel-item"
              src="..photos/AdobeStock_352437826.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

interface HeroSliderProps {}

export default HeroSlider;
