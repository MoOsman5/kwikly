import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import BG1 from "../../../assets/images/slider/BG1.png";
import BG2 from "../../../assets/images/slider/BG2.png";
import BG3 from "../../../assets/images/slider/BG3.png";
import BG4 from "../../../assets/images/slider/BG4.png";


export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="slider-background" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "296px", width: "400px" }}
            className=""
            src={BG1}
            alt="First slide"
          />
          <div className="">
            <h3 className="slider-title">There Is A Big Discount</h3>
            <p className="slider-text">Up to 50% off when you buy</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-background2" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "296px", width: "200px" }}
            className=""
            src={BG2}
            alt="First slide"
          />
          <div className="">
            <h3 className="slider-title">There Is A Big Discount</h3>
            <p className="slider-text">Up to 50% off when you buy</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="slider-background3" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "200px", width: "300px" }}
            className=""
            src={BG3}
            alt="First slide"
          />
          <div className="">
            <h3 className="slider-title">There Is A Big Discount</h3>
            <p className="slider-text">Up to 50% off when you buy</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="slider-background4" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
        <img
            style={{ height: "250px", width: "300px" }}
            className=""
            src={BG4}
            alt="First slide"
          />
          <div className="">
            <h3 className="slider-title">There Is A Big Discount</h3>
            <p className="slider-text">Up to 50% off when you buy</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
