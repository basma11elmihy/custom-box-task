"use client";
import "./Hero.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import Image from "next/image";
import { sliderData } from "../../utils/SliderData";
import nextArrow from "../../../public/assets/next-arrow.svg";
import prevArrow from "../../../public/assets/prev-arrow.svg";

function SampleArrow(props) {
  const { type, onClick } = props;

  return (
    <div
      className={type === "next" ? "next-arrow" : "prev-arrow"}
      onClick={onClick}
    >
      <Image
        src={type === "next" ? nextArrow : prevArrow}
        width={25}
        height={25}
      />
    </div>
  );
}

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleArrow type="next" />,
    prevArrow: <SampleArrow type="prev" />,
    dotsClass: `slick-dots dots`,
  };

  return (
    <div className="container">
      <Slider {...settings}>
        {sliderData.map((slider, index) => (
          <div className="inner-slider-section" key={index}>
            <div className="grid-item">
              <div className="grid-item-container">
                <p className="slider-header-text">{slider.headerText}</p>
                <p className="slider-text">{slider.text}</p>
                {slider.button && (
                  <button className="slider-button">GET STARTED</button>
                )}
              </div>
            </div>
            <div className="grid-item">
              <Image
                src={slider.imageSrc}
                width={600}
                height={600}
                className="slider-image"
                alt="cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
